import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroChildComponent } from './part-01/hero-child/hero-child.component';
import { HeroParentComponent } from './part-01/hero-parent/hero-parent.component';
import { NameChildComponent } from './part-02/name-child/name-child.component';
import { NameParentComponent } from './part-02/name-parent/name-parent.component';
import { VersionChildComponent } from './part-03/version-child/version-child.component';
import { VersionParentComponent } from './part-03/version-parent/version-parent.component';
import { VoterComponent } from './part-04/voter/voter.component';
import { VoteTakerComponent } from './part-04/vote-taker/vote-taker.component';
import { CountdownTimerComponent } from './part-05/countdown-timer/countdown-timer.component';
import { CountdownParentComponent } from './part-05/countdown-parent/countdown-parent.component';
import { CountdownParentViewChildComponent } from './part-06/countdown-parent-view-child/countdown-parent-view-child.component';
import { MissionControlComponent } from './part-07/mission-control/mission-control.component';
import { AstronautComponent } from './part-07/astronaut/astronaut.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroChildComponent,
    HeroParentComponent,
    NameChildComponent,
    NameParentComponent,
    VersionChildComponent,
    VersionParentComponent,
    VoterComponent,
    VoteTakerComponent,
    CountdownTimerComponent,
    CountdownParentComponent,
    CountdownParentViewChildComponent,
    MissionControlComponent,
    AstronautComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: AppComponent},
      {path: 'part-01', component: HeroParentComponent},
      {path: 'part-02', component: NameParentComponent},
      {path: 'part-03', component: VersionParentComponent},
      {path: 'part-04', component: VoteTakerComponent},
      {path: 'part-05', component: CountdownParentComponent},
      {path: 'part-06', component: CountdownParentViewChildComponent},
      {path: 'part-07', component: MissionControlComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
