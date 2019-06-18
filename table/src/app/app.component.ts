import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Employee Details';
  employees = [
    {name:"Zanele", organisation:"Mlab", email:"zanele@mlab.com", number:"0811234568", bio:"" },
    {name:"Keketso", organisation:"Mlab", email:"keketso@gmail.com", number:"0723219654", bio:""},
    {name:"Sibusiso", organisation:"Mlab", email:"sibusiso@gmail.com", number:"0627418523", bio:""}
  ];

  model:any={};
  model2:any={};
  msg:any="";
  addEmployee(){
    this.employees.push(this.model);
    this.model={};
    this.msg="record successfully added...";
  }
  deleteEmployee(i){
this.employees.splice(i,1);
this.msg="record successfully deleted...";

  }
  myValue;
  editEmployee(k){
    
    this.model2.name=this.employees[k].name;
    this.model2.organisation=this.employees[k].organisation;
    this.model2.email=this.employees[k].email;
    this.model2.number=this.employees[k].number;
    this.model2.bio=this.employees[k].bio;
    this.myValue=k;
  }

  openForm(){
    document.getElementById("myForm").style.display="block";
  }

  closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  updateEmployee(){
    let k=this.myValue;
    for(let i=0; i<this.employees.length; i++){
      if(i==k){
        this.employees[i]=this.model2;
        this.model2={};
        this.msg="record successfully updated...";
      }
    }
  }

  clickMe(){
    this.msg="";
  }
}
