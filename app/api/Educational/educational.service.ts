import { type IEducational } from "./educational.dto";
import { pool } from "../../common/services/sql.service";
import { type RowDataPacket, type ResultSetHeader } from 'mysql2';

export const createEducational = async (data: IEducational) => {
  const query = `
    INSERT INTO educational (
      user_id, jee_application_no, jee_crl_rank, x_pass_year, xii_pass_year,
      english_marks, maths_marks, physics_marks, other_marks, total_marks,
      percentage, status
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [
    data.user_id,
    data.jee_application_no,
    data.jee_crl_rank,
    data.x_pass_year,
    data.xii_pass_year,
    data.english_marks,
    data.maths_marks,
    data.physics_marks,
    data.other_marks,
    data.total_marks,
    data.percentage,
    data.status,
  ];

  const [result] = await pool.execute<ResultSetHeader>(query, values);
  return { id: result.insertId, ...data };
};

export const updateEducational = async (id: number, data: IEducational) => {
  const query = `
    UPDATE educational SET
       jee_application_no = ?, jee_crl_rank = ?, x_pass_year = ?, xii_pass_year = ?,
      english_marks = ?, maths_marks = ?, physics_marks = ?, other_marks = ?, total_marks = ?,
      percentage = ?, status = ?
    WHERE id = ?`;

  const values = [
    data.jee_application_no,
    data.jee_crl_rank,
    data.x_pass_year,
    data.xii_pass_year,
    data.english_marks,
    data.maths_marks,
    data.physics_marks,
    data.other_marks,
    data.total_marks,
    data.percentage,
    data.status,
    id,
  ];

  await pool.execute(query, values);
  return { id, ...data };
};

export const editEducational = async (
  id: number,
  data: IEducational
): Promise<IEducational & { id: number }> => {
  let query = "UPDATE educational SET ";
  const updates: string[] = [];
  const values: any[] = [];

  Object.keys(data).forEach((key) => {
    updates.push(`${key} = ?`);
    values.push((data as any)[key]);
  });

  query += updates.join(", ") + " WHERE id = ?";
  values.push(id);

  await pool.execute(query, values);
  return { id, ...(data as IEducational) };
};

export const deleteEducational = async (id: number) => {
  const query = "DELETE FROM educational WHERE id = ?";
  await pool.execute(query, [id]);
  return { id, deleted: true };
};

export const getEducationalById = async (id: number) => {
  const query = "SELECT * FROM educational WHERE id = ?";
  const [rows] = await pool.execute<RowDataPacket[]>(query, [id]);
  return rows[0] || null;
};

export const getAllEducational = async () => {
  const query = "SELECT * FROM educational";
  const [rows] = await pool.execute(query);
  return rows;
};
