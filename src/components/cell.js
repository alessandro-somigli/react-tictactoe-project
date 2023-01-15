
// occupied prop:
// 0: not occupied
// 1: occupied by p1
// 2: occupied by p2
export const Cell = ({ occupied, onClick }) => {

    return (
        <td onClick={onClick} style={{cursor: occupied===0?'pointer':'inherit'}}>
            {occupied===0?'': 
             occupied===1?'X':'O'}
        </td>
    );
}