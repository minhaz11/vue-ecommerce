<template>
    <div>
        <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <!-- <h5 class="modal-title" id="exampleModalLabel">Login</h5> -->
      <h5><ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Sign Up</a>
                </li>
         </ul></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
         <!---Login-->
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                 <h6 class="text-center">Login Please</h6>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                 <div class="form-group">
                    <button class="btn btn-primary" data-dismiss="modal" @click="login()">Login</button>
                 </div>
            </div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <h6 class="text-center">Create an account</h6>
                <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input v-model="name" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your name">
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                 <div class="form-group">
                    <button class="btn btn-primary" @click="register" data-dismiss="modal">Sign Up</button>
                 </div>
            </div>
        </div>
          
           
      </div>
      <!-- <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> -->
    </div>
  </div>
</div>
    </div>
</template>

<script>
import {fb} from '../firebase'
    export default {
        data() {
            return {
                name: '',
                email:'',
                password:''
            }
        },
        
        methods:{
            register(){
                fb.auth().createUserWithEmailAndPassword(this.email, this.password).then(user=>{
                    this.$router.replace('admin')
                }).catch(function(error) {
          // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // [START_EXCLUDE]
                    if (errorCode === 'auth/wrong-password') {
                        alert('Wrong password.');
                    } else {
                        alert(errorMessage);
                    }
                    console.log(error);
        });
            },
            login(){
                fb.auth().signInWithEmailAndPassword(this.email,this.password).then((user)=>{
                    this.$router.replace('admin')
                }).catch(function(error) {
          // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // [START_EXCLUDE]
                    if (errorCode === 'auth/wrong-password') {
                        alert('Wrong password.');
                    } else {
                        alert(errorMessage);
                    }
                    console.log(error);
        });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>