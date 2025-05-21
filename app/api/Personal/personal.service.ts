import { type IPersonalDetails } from "./personal.dto";
import { pool } from "../../common/services/sql.service";
import { type RowDataPacket, type ResultSetHeader } from 'mysql2';

export const createPersonalDetails = async (data: IPersonalDetails) => {
  const query = `
    INSERT INTO personaldetails (
      user_id, name, father_name, mother_name, dob, gender, nationality,
      category, caste, address, district, aadhaar, status
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [
    data.user_id,
    data.name,
    data.father_name,
    data.mother_name,
    data.dob,
    data.gender,
    data.nationality,
    data.category,
    data.caste,
    data.address,
    data.district,
    data.aadhaar,
    data.status
  ];

  const [result] = await pool.execute<ResultSetHeader>(query, values);
  return { id: result.insertId, ...data };
};

export const updatePersonalDetails = async (id: number, data: IPersonalDetails) => {
  const query = `
    UPDATE personaldetails SET
      name = ?, father_name = ?, mother_name = ?, dob = ?,
      gender = ?, nationality = ?, category = ?, caste = ?, address = ?,
      district = ?, aadhaar = ?, status = ?
    WHERE id = ?`;

  const values = [
    data.name,
    data.father_name,
    data.mother_name,
    data.dob,
    data.gender,
    data.nationality,
    data.category,
    data.caste,
    data.address,
    data.district,
    data.aadhaar,
    data.status,
    id
  ];

  await pool.execute(query, values);
  return { id, ...data };
};

export const editPersonalDetails = async (
  id: number,
  data: IPersonalDetails
): Promise<IPersonalDetails & { id: number }> => {
  let query = "UPDATE personaldetails SET ";
  const updates: string[] = [];
  const values: any[] = [];

  Object.keys(data).forEach((key) => {
    updates.push(`${key} = ?`);
    values.push((data as any)[key]);
  });

  query += updates.join(", ") + " WHERE id = ?";
  values.push(id);

  await pool.execute(query, values);
  return { id, ...data };
};

export const deletePersonalDetails = async (id: number) => {
  const query = "DELETE FROM personaldetails WHERE id = ?";
  await pool.execute(query, [id]);
  return { id, deleted: true };
};

export const getPersonalDetailsById = async (id: number) => {
  const query = "SELECT * FROM personaldetails WHERE id = ?";
  const [rows] = await pool.execute<RowDataPacket[]>(query, [id]);
  return rows[0] || null;
};

export const getAllPersonalDetails = async () => {
  const query = "SELECT * FROM personaldetails";
  const [rows] = await pool.execute(query);
  return rows;
};
