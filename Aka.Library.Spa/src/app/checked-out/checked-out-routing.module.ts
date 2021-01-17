import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CheckedOutBooksComponent } from "./checked-out-books/checked-out-books.component";
import { HistoryComponent } from "./history/history.component";

const routes: Routes = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "list", component: CheckedOutBooksComponent },
  { path: "history", component: HistoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckedOutRoutingModule {}
