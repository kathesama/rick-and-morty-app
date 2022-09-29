Use this folder for redux management purposes
Template <br>
`<redux>` <br>
 `- store.tsx` <br>
`- rootReducer.tsx` <br>
`--<reducerFolderName>` <br>
`----<reducerName>.slice.js` <br>
`----<reducerName>.actions.js`

- All reducers should be in each folder, every file should have .slice.js and if it has actions sould be in its own .js
- .actions.js imports from slice.js, actios are more complex reducers which can call others actions from others slices and complete the logic you want to create.
- This redux store is implemented in root index.js and 
