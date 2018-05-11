import { NgModule } from '@angular/core';
import { MatToolbarModule, MatTabsModule, MatFormFieldModule, MatButtonModule, MatCardModule, MatTableModule, MatInputModule } from '@angular/material';
//import { MatTableModule } from '@angular/material/table';

@NgModule({
    //imports: [MatToolbarModule, MatTabsModule ],
    exports: [MatToolbarModule, MatTabsModule, MatFormFieldModule, MatButtonModule, MatCardModule, MatTableModule, MatInputModule  ]
})
export class MaterialModule {}