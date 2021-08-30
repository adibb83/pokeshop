import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Pokemon } from '@models/pokemon-types';
import { AuthService } from '@services/auth-service/auth.service';
import { PokemonService } from '@services/pokemon/pokemon.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

// i have added sidenav for mobile ui/ux
export class SidenavComponent implements OnInit, OnDestroy {

  @Input() opened = false;
  pokemonsOnCart$!: Observable<Pokemon[]>;
  listSub!: Subscription;
  isLoggedIn!: Observable<boolean>;

  constructor(
    private auth: AuthService,
    private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.bootstrap();
  }

  private bootstrap() {
    this.auth.init();
    this.pokemonService.initPokemonsIdAndImage();
    this.isLoggedIn = this.auth.isLoggedIn$;
    this.listSub = this.pokemonService.updateCart.subscribe((update) => {
      if (update) {
        this.pokemonsOnCart$ = this.pokemonService.CartList$;
      }
    });
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }

  toggleNave() {
    this.opened = !this.opened;
  }

  ngOnDestroy() {
    if (this.listSub) {
      this.listSub.unsubscribe();
    }
  }
}