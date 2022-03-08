import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    //引入了一个模块，只能使用模块中的服务或者exports导出的东西，所以要使用headerComponent，需要在CoreModule中导出
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
