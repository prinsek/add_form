import { Component, ElementRef, ViewChild } from '@angular/core';
import { WorkflowService } from './services/workflow.service';
import { MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog'
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  propOwnerform:FormGroup
  isDisplayed = true;
  arr:any=[];
  splitFormDetail:any={};
  panelOpenState:boolean=false;
  dataarray=[]
  public propertyComponent:any[]=[{
    owner_name:'',
    father_name:'',
    dob:'',
    perma_add:'',
    res_add:'',
    mobile_no:'',
    alt_mob_no:'',
    email:'',
    alt_email:'',
    doc:''

  }]
  // requiredForm: FormGroup;
  constructor(private dialog:MatDialog,private formBuilder: FormBuilder,public Workflowservice:WorkflowService,) {
    this.propOwnerform=formBuilder.group({
      mobile_no: ['', Validators.required],
      email:['',[ Validators.required, Validators.email]],
      owner_name: ['', Validators.required],
      father_name: ['', Validators.required],
      dob: ['', Validators.required],
      perma_add: ['', Validators.required],
      res_add: ['', Validators.required],
      alt_mob_no: ['', Validators.required],
      alt_email: ['', Validators.required],
      doc:['', Validators.required],
    })
   }

  ngOnInit() {
  }
  // addForm(){
  //   this.dataarray.push({name1:'',doc1:''})
   
  // }
  removeForm() {
    this.dataarray.splice(1)
  }

addSectionOwner(){
  this.propertyComponent.push({
    owner_name:'',
  father_name:'',
  dob:'',
  perma_add:'',
  res_add:'',
  mobile_no:'',
  alt_mob_no:'',
  email:'',
  alt_email:'',
  doc:''
  })
}
propertyOwnerbtn() {
  console.log(this.propOwnerform.value);
}
removeSectionOwner(i:any){
  this.propertyComponent.splice(i,1)
}
  addSplitPartition(){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.width='20%'
    dialogConfig.disableClose=true
    this.dialog.open(PartitionComponent,dialogConfig).afterClosed().subscribe(result=>{
      if(result.isSubmitted){
        const x=result.partitionData
        //  this.arr=[]
      this.isDisplayed=false
      // console.log(x)
      for(let i=0;i<x;i++){
        this.arr.push(x);
        console.log('arr data',this.arr);
      }
      }
      
    })

  }
   floorPartition(){
    // const popupForm=this.dialog.open(floorPartitionComponent);
  }

  async SubmitPropSplitData(){
    let propSplitData: any = {};
    propSplitData = this.Workflowservice.splitFormDetail.getValue();

    for(let newValue in this.splitFormDetail) {
      for(let oldValue in propSplitData) {
        if(oldValue == newValue){

          propSplitData[oldValue] = this.splitFormDetail[newValue];
        }
      }
    }
    console.log('dummy',propSplitData);
  //  let response=await this.Workflowservice.propSplitObject(propSplitData)
  //  console.log('response',response);
   
  }
  title = 'formAdd';
}


@Component({
  selector: 'partition',
  templateUrl: 'partition.html'
})
export class PartitionComponent{
 
  partitionData: any=0;
  isSubmitted=false
  constructor(private workflow:WorkflowService,private dialogRef:MatDialogRef<PartitionComponent>){}
  @ViewChild('partition')
  partition!: ElementRef;

  noOfPartition(){
    this.partitionData=this.partition.nativeElement.value;
    this.workflow.partitionDataFilter=this.partition.nativeElement.value
      // console.log('partition',this.partitionData)
      this.isSubmitted=true
      this.dialogRef.close({partitionData:this.partitionData,isSubmitted:this.isSubmitted});    
  }
  close(){
    this.isSubmitted=false
    this.dialogRef.close({partitionData:this.partitionData,isSubmitted:this.isSubmitted});
  }
}
