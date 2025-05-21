import { type IDocument } from "./document.dto";
import { pool } from "../../common/services/sql.service";
import { type RowDataPacket, type ResultSetHeader } from "mysql2";

export const createDocument = async (data: IDocument) => {
  const query = `
    INSERT INTO document (
      user_id, photo, signature, x_marksheet, xii_marksheet,
      jee_scorecard, ews_certificate, domicile_certificate, status
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [
    data.user_id,
    data.photo,
    data.signature,
    data.x_marksheet,
    data.xii_marksheet,
    data.jee_scorecard,
    data.ews_certificate,
    data.domicile_certificate,
    data.status,
  ];

  const [result] = await pool.execute<ResultSetHeader>(query, values);
  return { id: result.insertId, ...data };
};

export const updateDocument = async (id: number, data: IDocument) => {
  const query = `
    UPDATE document SET
       photo = ?, signature = ?, x_marksheet = ?, xii_marksheet = ?,
      jee_scorecard = ?, ews_certificate = ?, domicile_certificate = ?, status = ?
    WHERE id = ?`;

  const values = [
    data.photo,
    data.signature,
    data.x_marksheet,
    data.xii_marksheet,
    data.jee_scorecard,
    data.ews_certificate,
    data.domicile_certificate,
    data.status,
    id,
  ];

  await pool.execute(query, values);
  return { id, ...data };
};

export const editDocument = async (
  id: number,
  data: IDocument
): Promise<IDocument & { id: number }> => {
  let query = "UPDATE document SET ";
  const updates: string[] = [];
  const values: any[] = [];

  Object.keys(data).forEach((key) => {
    updates.push(`${key} = ?`);
    values.push((data as any)[key]);
  });

  query += updates.join(", ") + " WHERE id = ?";
  values.push(id);

  await pool.execute(query, values);
  return { id, ...(data as IDocument) };
};

export const deleteDocument = async (id: number) => {
  const query = "DELETE FROM document WHERE id = ?";
  await pool.execute(query, [id]);
  return { id, deleted: true };
};

export const getDocumentById = async (id: number) => {
  const query = "SELECT * FROM document WHERE id = ?";
  const [rows] = await pool.execute<RowDataPacket[]>(query, [id]);
  return rows[0] || null;
};

export const getAllDocuments = async () => {
  const query = "SELECT * FROM document";
  const [rows] = await pool.execute(query);
  return rows;
};
