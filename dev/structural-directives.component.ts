﻿import {Component} from '@angular/core';
import {HighlightDirective} from './highlight.directive';
import {UnlessDirective} from './unless.directive';

@Component( {
    selector: 'my-structural-directives',
    template: `
        <section class="directive">
            <h2>*ngIf</h2>
            <div>
                Enter a number higher than 10
                <br>
                <input type="text" #number (keyup)="0">
            </div>
            <div *ngIf="number.value > 10">
                <h5>A heading</h5>
                 Number is greater than 10
            </div>
        </section>
        <section class="directive">
            <h2>*ngFor</h2>
            <div>
                <ul>
                    <li *ngFor="let item of list,#i = index">{{item}} {{i}}</li>
                </ul>
            </div>
        </section>
        <section class="directive">
            <h2>[ngSwitch]</h2>
            <div>
                Enter red, blue or green
                <br>
                <input type="text" #color (keyup)="0">
            </div>
            <div [ngSwitch]="color.value">
                <template [ngSwitchWhen]="'red'"><span style="color: red">Color is Red</span></template>
                <template [ngSwitchWhen]="'blue'"><span style="color: blue">Color is Blue</span></template>
                <template [ngSwitchWhen]="'green'"><span style="color: green">Color is Green</span></template>
                <template ngSwitchDefault><span>Don't know that color</span></template>
            </div>
        </section> 
        <section class="directive">
            <h2>Custom Directive: *myUnless</h2>
            <div>
                Enter true or false
                <br>
                <input type="text" #condition (keyup)="0">
            </div>
            <div *myUnless="condition.value != 'false'">
                Only shown if 'false' was entered!
            </div>              
        </section>           
    `,
    directives: [UnlessDirective]  
})

export class StructuralDirectives
{
    list = ['Apple','Milk','Bread'];

} 