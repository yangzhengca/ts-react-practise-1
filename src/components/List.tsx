import React from "react";
import { IState as IProps } from '../App'


// interface IProps {
//   people: {
//     name: string;
//     age: number;
//     url: string;
//     note?: string;
//   }[];
// }

const List:React.FC<IProps> = ({people}) => {
    const renderList=():JSX.Element[]=>{
        return people.map(person => {
            return (
                <li className="List">
                <div className="List-header">
                    <img className="List-img" src={person.url} alt="avatar" />
                </div>
                <h2>{person.name}</h2>       

            <p>{person.age} years old</p>
            <p className="List-note">{person.note}</p>
            </li>
            )
        })
    }

  return (
    <ul>
        {renderList()}
    </ul>
  )};

export default List;
