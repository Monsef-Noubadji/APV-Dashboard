
export const Pagination = ({perPage,totalUsers,pagination}) => {
    const pageNumbers = [];
    for (let i = 1 ; i <= Math.ceil(totalUsers / perPage);i++){
        pageNumbers.push(i);
    }
  return (
    <nav>
        <ul className="pagination">
            {pageNumbers.map(number=>(
                <li key={number} className="page-item" onClick={()=> {pagination(number)}}>
                    {number}
                </li>
            ))}
        </ul>
    </nav>
  )
}
