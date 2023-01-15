
// occupied prop:
// 0: not occupied
// 1: occupied by p1
// 2: occupied by p2
export const Cell = ({ occupied, onClick }) => {
    const content = occupied===0?'__': 
                    occupied===1?'X':'O'

    return (
        <td onClick={onClick}>
            {content}
        </td>
    );
}