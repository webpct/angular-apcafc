
import { NgModule } from '@angular/core';
import { RtlService } from '@fundamental-ngx/cdk/utils';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FundamentalNgxCdkModule } from '@fundamental-ngx/cdk';
import { FundamentalNgxCoreModule, FdDatetimeModule } from '@fundamental-ngx/core';
import { FundamentalNgxPlatformModule } from '@fundamental-ngx/platform';
import { HttpClientModule } from '@angular/common/http';
import { CdkTableModule } from '@angular/cdk/table';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { ButtonTypesExample } from './button-types-example.component';


@NgModule({
    declarations: [
        ButtonTypesExample
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        FundamentalNgxCdkModule,
        FundamentalNgxCoreModule, FdDatetimeModule,
        FundamentalNgxPlatformModule,
        HttpClientModule,
        CdkTableModule,
        DragDropModule
    ],
    providers: [
        RtlService,
        
    ],
    entryComponents: [
        
    ],
    bootstrap: [
        ButtonTypesExample
    ]
})
export class AppModule {}
