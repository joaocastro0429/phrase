import { DataTypes, Model} from 'sequelize'
import {sequelize} from '../instances/databse'

export interface PharsesInstance extends Model{
    id:number,
    author:string
    txt:string
}


export const Pharses = sequelize.define<PharsesInstance>('Phrase',{ 
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false
      },
      txt: {
        type: DataTypes.STRING,
        allowNull: false
      },
     
      
    },{
        tableName:"phrases",
        timestamps:false
    });
    