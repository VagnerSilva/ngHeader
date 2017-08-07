# ngHeader
Angular 4 + Material

> **Dependências:** \
 ng new ngHeader --style=scss \
 npm install --save @angular/material @angular/cdk \
 npm install --save hammerjs
 
> **Configuração:**
> - src/styles.scss
```scss
  @import "~@angular/material/prebuilt-themes/indigo-pink.css";
  @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
```
> - angular-cli.json
```json
  "scripts": [
  "../node_modules/hammerjs/hammer.min.js"
],
```
> - src/app/app.module.ts
```ts 
...
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  import { MaterialModule } from '@angular/material';

@NgModule({
...
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  ...
})
export class AppModule { }
```


