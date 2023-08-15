import React from 'react'
import './TableColoriser.css';

const TableColoriser = () => {
  return (
    <>
          <h2> Table Colorizer  </h2>
          <div> <input type = "number"  /> </div>
          <div style = {{margin:'1%'}}>  <button> Color me </button>
                 <button> Clear me  </button>
          </div>
        <div className="table-colorizer" style = {{display:'flex',justifyContent:'center',cursor:'pointer'}}>
            <table>
                <tr>
                    <td> 1 </td>
                    <td> 2 </td>
                    <td> 3 </td>
                </tr>
                <tr>
                    <td> 4 </td>
                    <td> 5 </td>
                    <td> 6 </td>
                </tr>
                <tr>
                    <td> 7 </td>
                    <td> 8 </td>
                    <td> 9 </td>
                </tr>
            </table>
        </div>
    </>
  )
}

export default TableColoriser