import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { AccountType, AtmState } from 'src/app/interfaces/app.interfaces';
import { AccountService } from 'src/app/services/account.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-atm-header',
  templateUrl: './atm-header.component.html',
  styleUrls: ['./atm-header.component.scss']
})
export class AtmHeaderComponent implements OnInit {

  ATM_STATES = AtmState;

  constructor(
    private accountService: AccountService,
    public navigationService: NavigationService
  ) {
  }

  @Input() lastState?: AtmState;

  currentState$ = this.accountService.atmState$;

  stateName$ = this.accountService.stateName$;

  ngOnInit() {
  }

}
