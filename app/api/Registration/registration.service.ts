import { type IRegistration } from "./registration.dto";
import { pool } from "../../common/services/sql.service";
import { type RowDataPacket, type ResultSetHeader } from 'mysql2';


export const createRegistration = async (data: IRegistration) => {
    const query = "INSERT INTO registration (season, last_payment_date,last_document_upload ,last_payment_date ,status) VALUES (?, ?)";
    const values = [
        data.season,
        data.last_payment_date,
        data.last_document_upload,
        data.last_registration_date,
        data.status
    ]
    const [result] = await pool.execute<ResultSetHeader>(query,values);
    return {id:result.insertId, ...data};
}

export const updateRegistration = async (id: number, data: IRegistration) => {
    const query = `
      UPDATE registration 
      SET season = ?, 
          last_payment_date = ?, 
          last_document_upload = ?, 
          last_registration_date = ?, 
          status = ? 
      WHERE id = ?
    `;
  
    const values = [
      data.season,
      data.last_payment_date,
      data.last_document_upload,
      data.last_registration_date,
      data.status,
      id,
    ];
  
    await pool.execute(query, values);
  
    return { id, ...data };
  };

  export const editRegistration = async (
    id: number,
    data: IRegistration
  ): Promise<IRegistration & { id: number }> => {
    let query = "UPDATE registration SET ";
    const updates: string[] = [];
    const values: any[] = [];
  
    Object.keys(data).forEach((key) => {
      updates.push(`${key} = ?`);
      values.push((data as any)[key]);
    });
  
    query += updates.join(", ") + " WHERE id = ?";
    values.push(id);
  
    await pool.execute(query, values);
  
    return { id, ...(data as IRegistration) };
  };


  export const deleteRegistration = async (id: number) => {
    const query = "DELETE FROM registration WHERE id = ?";
    await pool.execute(query, [id]);
    return { id, deleted: true };
  };


  export const getRegistrationById = async (id: number) => {
    const query = "SELECT * FROM registration WHERE id = ?";
    const [rows] = await pool.execute<RowDataPacket[]>(query, [id]);
    return rows[0] || null;
  };

  export const getAllRegistration = async() => {
    const query = "SELECT * FROM registration";
    const [rows] = await pool.execute(query);
    return rows;
  };