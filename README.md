# Tree Selector Demo

This project showcases a component (`app-tree-select`) for selecting data from nested tree structured objects. The mock data object is provided in the `response.mock.ts` file.


## Development server
- Install angular CLI, `npm install -g @angular/cli`,
- Clone the repo using the url `https://github.com/lakshya0246/tree-selector.git`
- To view the demo, run `ng serve` for a dev server from the base folder, and navigate to `http://localhost:4200/`.


## Further improvements
1. Make title/placeholder an input
2. Make the button text dynamically update on value change
3. Add close on `click` outside any menu
4. Add keyboard navigation and close on `esc`
5. Add support for mobile screens and and for cases where the tree is deeper than 4-5 nodes *(Not sure about this because a tree deeper than 4-5 nodes might not be good for UX)*
6. Add support for output cast as `key-value` pairs

***
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.4.