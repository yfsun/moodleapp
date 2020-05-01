// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Component, OnDestroy, ViewChild } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { CoreEventsProvider } from '@providers/events';
import { CoreSitesProvider } from '@providers/sites';
import { CoreSplitViewComponent } from '@components/split-view/split-view';
import { CoreTabsComponent } from '@components/tabs/tabs';

/**
 * Page that displays the messages index page.
 */
@IonicPage({ segment: 'addon-home-index' })
@Component({
    selector: 'page-addon-home-index',
    templateUrl: 'index.html',
})
export class AddonHomeIndexPage implements OnDestroy {
    @ViewChild(CoreSplitViewComponent) splitviewCtrl: CoreSplitViewComponent;
    @ViewChild(CoreTabsComponent) tabsComponent: CoreTabsComponent;

    protected loadSplitViewObserver: any;
    protected siteId: string;

    constructor(eventsProvider: CoreEventsProvider, sitesProvider: CoreSitesProvider) {

    }



    /**
     * User entered the page.
     */
    ionViewDidEnter(): void {
        this.tabsComponent && this.tabsComponent.ionViewDidEnter();
    }

    /**
     * User left the page.
     */
    ionViewDidLeave(): void {
        this.tabsComponent && this.tabsComponent.ionViewDidLeave();
    }

    /**
     * Page destroyed.
     */
    ngOnDestroy(): void {
        this.loadSplitViewObserver && this.loadSplitViewObserver.off();
    }
}
