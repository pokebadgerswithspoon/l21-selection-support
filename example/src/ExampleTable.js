import React, {useState} from 'react'
import ReactTable from 'react-table'
import ExampleAction from './ExampleAction'
import requestData from './exampleData'
import 'react-table/react-table.css'

import {
  CancelSelection,
  ToggleSelection,
  SelectionActions,
  SelectionState,
  SelectionSupport,
  SelectionCheckbox,
  SelectionCheckboxLabel
} from 'l21-selection-support'

const columns = [      {
  // A checkbox to add to selection
  Cell: SelectionCheckbox,
  Header: '',
  accessor: 'id',
  maxWidth: 25,
},
{
  Header: 'Name',
  id: 'name',
  accessor: o => o,
  // Create a cell with label for checkbox
  Cell: ({value: {id, name}}) => (<SelectionCheckboxLabel value={id}>{name}</SelectionCheckboxLabel>)
}, {
  Header: 'Age',
  accessor: 'age',
  Cell: ({ value }) => <span className='number'>{value}</span>
}]


const ExampleTable = () => {
  const [data, setData] = useState([])
  const [pages, setPages] = useState(0)
  const [loading, setLoading] = useState(false)
  const fetchData = ({pageSize, page}, instance) => {
    setLoading(true)
    requestData(
      pageSize,
      page
    ).then(({rows, pages}) => {
      setData(rows)
      setPages(pages)
      setLoading(false)
    })
  }
  return (
    <SelectionSupport>
      <SelectionActions>
        <SelectionState onClick={(list) => alert(`Hey, you just clicked on ${list.length} worth of selection`)}/>
        <CancelSelection />
      </SelectionActions>
      <SelectionActions>
        <ToggleSelection selection={data.map(({id}) => id)} />
      </SelectionActions>
      <ExampleAction />
      <ReactTable
        manual
        data={data}
        onFetchData={fetchData}
        columns={columns}
        defaultPageSize={5}
        loading={loading}
        pages={pages}
      />
    </SelectionSupport>
  )
}

export default ExampleTable
