import { type IPhysical } from "./physical.dto";
import { pool } from "../../common/services/sql.service";
import { type RowDataPacket, type ResultSetHeader } from "mysql2";

export const createPhysical = async (data: IPhysical) => {
  const query = `
    INSERT INTO physical (
      user_id, weight_kg, physical_defect, status
    ) VALUES (?, ?, ?, ?)`;

  const values = [
    data.user_id,
    data.weight_kg,
    data.physical_defect,
    data.status,
  ];

  const [result] = await pool.execute<ResultSetHeader>(query, values);
  return { id: result.insertId, ...data };
};

export const updatePhysical = async (id: number, data: IPhysical) => {
  const query = `
    UPDATE physical SET
      weight_kg = ?, physical_defect = ?, status = ?
    WHERE id = ?`;

  const values = [
    data.weight_kg,
    data.physical_defect,
    data.status,
    id,
  ];

  await pool.execute(query, values);
  return { id, ...data };
};

export const editPhysical = async (
  id: number,
  data: IPhysical
): Promise<IPhysical & { id: number }> => {
  let query = "UPDATE physical SET ";
  const updates: string[] = [];
  const values: any[] = [];

  Object.keys(data).forEach((key) => {
    updates.push(`${key} = ?`);
    values.push((data as any)[key]);
  });

  query += updates.join(", ") + " WHERE id = ?";
  values.push(id);

  await pool.execute(query, values);
  return { id, ...(data as IPhysical) };
};

export const deletePhysical = async (id: number) => {
  const query = "DELETE FROM physical WHERE id = ?";
  await pool.execute(query, [id]);
  return { id, deleted: true };
};

export const getPhysicalById = async (id: number) => {
  const query = "SELECT * FROM physical WHERE id = ?";
  const [rows] = await pool.execute<RowDataPacket[]>(query, [id]);
  return rows[0] || null;
};

export const getAllPhysical = async () => {
  const query = "SELECT * FROM physical";
  const [rows] = await pool.execute<RowDataPacket[]>(query);
  return rows;
};
