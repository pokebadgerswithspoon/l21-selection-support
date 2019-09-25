import SelectionState from './SelectionState'
import SelectionSupport from './SelectionSupport'
import SelectionActions from './SelectionActions'
import SelectionCheckbox from './SelectionCheckbox'
import withSelection from './withSelection'
import CancelSelection from './CancelSelection'
import ToggleSelection from './ToggleSelection'
import Button from './Button'

const SelectionCheckboxContainer = withSelection(SelectionCheckbox)
const SelectionActionsContainer = withSelection(SelectionActions)
const CancelSelectionContainer = withSelection(CancelSelection)
const ToggleSelectionContainer = withSelection(ToggleSelection)
const SelectionStateContainer = withSelection(SelectionState)

export {
  withSelection,
  SelectionSupport,
  SelectionStateContainer as SelectionState,
  SelectionActionsContainer as SelectionActions,
  SelectionCheckboxContainer as SelectionCheckbox,
  CancelSelectionContainer as CancelSelection,
  ToggleSelectionContainer as ToggleSelection,
  Button,
}
