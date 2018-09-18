import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component'
import { CollectionComponent } from '../collection/collection.component'
import { AboutComponent } from '../about/about.component'
import { ContactComponent } from '../contact/contact.component'
import { PortfolioComponent } from '../portfolio/portfolio.component'
import { ProductComponent } from '../product/product.component';
import { LoginComponent } from '../admin/login/login.component';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { AddItemComponent } from '../admin/add-item/add-item.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
      path:'about',
      component: AboutComponent,

    },
    {
      path:'contact',
      component: ContactComponent,

    },
    {
      path:'portfolio',
      component: PortfolioComponent,

    }, {
        path:'collection',
        component: CollectionComponent,
        
      },
    {
      path:'collection',
      component: CollectionComponent
    },{
        path:'collection/product/:id',
        component:ProductComponent
    },{
        path:'admin/login',
        component:LoginComponent
    },{
        path:'admin/dashboard',
        component:DashboardComponent
    },
{
    path:'admin/add',
    component:AddItemComponent
}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }