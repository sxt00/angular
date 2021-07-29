import { Component } from '@angular/core';


@Component({
    selector:'app-basicform',
    templateUrl:'./basicform.component.html',
    styleUrls: ['./basicform.component.css']
})

export class BasicformComponent {
    editStr = 'This is an editable text.';
    customEditIconStr = 'Custom edit icon and tooltip text.';
    hideEditTooltipStr = 'Hide edit tooltip.';
    copyStr = 'This is a copyable text.';
}