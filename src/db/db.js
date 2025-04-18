import pg from 'pg'
import dotenv from 'dotenv'


export class PostgresModel {
    #pg

    constructor() {
        this.#pg = new pg.Pool({
            // connectionString:'postgres://numvtkzu:o_dkAvE2RxFUzmGnM3x_Z8sTqsnnYMWI@satao.db.elephantsql.com/numvtkzu'
            connectionString:'postgresql://forpredictor_user:aOIgsXdrgJ08sHFbmn2A2rrBpAMgMeSV@dpg-cumtkmpu0jms73b86540-a/forpredictor'
                
            // postgresql://forpredictor_user:aOIgsXdrgJ08sHFbmn2A2rrBpAMgMeSV@dpg-cumtkmpu0jms73b86540-a/forpredictor
            
        })
    }

    async fetch(SQL, ...params) {
        const client = await this.#pg.connect()
        try {
            const { rows } = await client.query(SQL, params.length ? params : null)
            return rows
        } catch(err) {
            console.log(err)
        } finally {
            client.release()
        }
    }
}




