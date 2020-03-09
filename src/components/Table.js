import React from 'react';

// empty value
function empty() {
  return <span className="empty">empty</span>;
}

// Table
function Table({ filteredData }) {
  return (
    <div className="table">
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Subtitle</th>
            <th scope="col">Publisher</th>
            <th scope="col">PublishedDate</th>
            <th scope="col">Language</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.volumeInfo.title}</td>
              <td>
                {item.volumeInfo.subtitle
                  ? item.volumeInfo.subtitle
                  : empty()}
              </td>
              <td>
                {item.volumeInfo.publisher
                  ? item.volumeInfo.publisher
                  : empty()}
              </td>
              <td>
                {item.volumeInfo.publishedDate
                  ? item.volumeInfo.publishedDate
                  : empty()}
              </td>
              <td>
                {item.volumeInfo.language
                  ? item.volumeInfo.language
                  : empty()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Export Component
export default Table;






