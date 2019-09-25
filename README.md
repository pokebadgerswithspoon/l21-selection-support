# l21-selection-support

> Selection support for `react`, works nice with `react-table`.
> An utility to select lots of ids and execute an action on it.

[![NPM](https://img.shields.io/npm/v/l21-selection-support.svg)](https://www.npmjs.com/package/l21-selection-support) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-airbnb-brightgreen.svg)](https://github.com/airbnb/javascript) [![Issues][issues-shield]][issues-url]

## Install

```bash
yarn add l21-selection-support
```

## Usage

See [`example/`](example/) for use with `react-table`.

At glance:
```jsx
<SelectionSupport>
  <SelectionActions>
    <CancelSelection/>
    <ToggleSelection selection={[1,3,4]}/>
    <MoveSelectedUsersSomewhereAction/>
  </SelectionActions>
  <FantasyTableWithPagination>
      ...
      <td>
        <SelectionCheckBox value={1}/>
        <SelectionCheckBoxLabel value={1}>John doe</SelectionCheckBoxLabel>
      </td>
      ...
  </FantasyTableWithPagination>
</SelectionSupport>
```

### Demo

```sh
yarn build
cd example
yarn start
# browser window pops up
# http://localhost:3000/ is the example to see
```

### How it works

- Put selectable items within `SelectionSupport` component.
- Add actions on selection within `SelectionActions`, once selection is enabled actions will become visible
- Items to selection can be added (and removed) with `SelectionCheckbox`
- Custom actions are easy to make with `withSelection` helper.

### API

#### SelecionSupport
`SelectionSupport` is parent for selection. Just wrap your document with `SelectionSupport`.
#### SelectionActions
`SelectionActions` lives inside of `SelectionSupport`, it is a block of actions on selection. There may be muliple `SelectionActions` within `SelectionSupport`, all are going to become visible when selection is enabled.
#### SelectionCheckbox
Is a check box with item to add to your selelection. Checking the box will enable the selection and make `SelectionActions` visible.
There is also `SelectionCheckboxLabel`.

#### CancelSelection
An action. Will clear and disable selection making `SelectionActions` invisible.
#### ToggleSelection
An action. It accepts a list of items and will either add or remove it from selection. See it as "add all on page".
#### withSelection
A helper to privide selection API to a component. Use it to create a custom action.







## License

MIT © [](https://github.com/)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=flat-square
[contributors-url]: https://github.com/pokebadgerswithspoon/l21-selection-support/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=flat-square
[forks-url]: https://github.com/pokebadgerswithspoon/l21-selection-support/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=flat-square
[stars-url]: https://github.com/pokebadgerswithspoon/l21-selection-support/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=flat-square
[issues-url]: https://github.com/pokebadgerswithspoon/l21-selection-support/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=flat-square
[license-url]: https://github.com/pokebadgerswithspoon/l21-selection-support/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
