import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';

const MATERIAL_IMPORTS = [
  CommonModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatPaginatorModule,
  MatCardModule,
  MatBadgeModule,
];

@NgModule({
  declarations: [],
  imports: MATERIAL_IMPORTS,
  exports: MATERIAL_IMPORTS,
})
export class MaterialModule {}
