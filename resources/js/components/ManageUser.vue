<template>
    <div class="container">
       <div class="row mt-4">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">All Users</h3>     

                <div class="card-tools">
                  <button class="btn btn-success fas fa-user-plus mr-4" data-toggle="modal" data-target="#userModal">  Add User</button>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Username</th>
                      <th>Email</th>
                      <th>Registered Date</th>
                      <th>Type</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="user in users" v-bind:key="user.id">
                      <td>{{user.id}}</td>
                      <td>{{user.name | caseUpper}}</td>
                      <td>{{user.email}}</td>
                      <td>{{user.created_at | fullDate}}</td>
                      <td>{{user.type | caseUpper}}</td>
                      <td>
                          <a href="#" class="btn btn-primary btn-sm"><span class="fas fa-edit"></span></a> | 
                          <a href="#" class="btn btn-danger btn-sm "><span class="fas fa-trash"></span></a>
                        </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
        </div>

        <!-- New User Modal -->
<div class="modal fade" id="userModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New User Information</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div class="modal-body">
        <form action="" @submit.prevent="addUser" method="post" autocomplete="off">

            <div class="form-group">
                <input v-model="form.name" id="name" class="form-control" type="text" placeholder="Name" name="name" :class="{'is-valid' : form.errors.has('name')}">
                <has-error :form="form" field="name"></has-error>
            </div>              

            <div class="form-group">
                <input v-model="form.password" id="password" class="form-control" type="password" placeholder="Password" name="password" :class="{'is-valid' : form.errors.has('password')}">
                <has-error :form="form" field="password"></has-error>
            </div>   

            <div class="form-group">
                <input v-model="form.email" id="email" class="form-control" type="email" placeholder="Email Address" name="email" :class="{'is-valid' : form.errors.has('email')}">
                <has-error :form="form" field="email"></has-error>
            </div>  

            <div class="form-group">
                <select v-model="form.type" id="type" class="form-control" name="type" :class="{'is-valid' : form.errors.has('type')}" >
                    <option value="">Select User Role</option>
                    <option value="admin">Admin</option>
                    <option value="user">Standard User</option>
                    <option value="author">Author</option>
                </select>
                <has-error :form="form" field="type"></has-error>
            </div>    

            <div class="form-group">
                <textarea v-model="form.bio" id="bio" class="form-control" placeholder="Short Bio (optional)" name="bio" :class="{'is-valid' : form.errors.has('bio')}"></textarea>
                <has-error :form="form" field="bio"></has-error>
            </div>  

            <div class="modal-footer">
                <button type="button" class="btn btn-danger fas fa-window-close" data-dismiss="modal"> Close</button>
                <button type="submit" class="btn btn-primary fas fa-user"> Create User</button>
            </div>

          </form>         
      </div>
    </div>
  </div>
</div>             



    </div>     
</template>



<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        data(){
            return{
                form: new Form({
                    name : '',
                    email : '',
                    password: '',
                    type: '',
                    image: '',
                    bio: ''
                }),
                users : []
            }
        },
        created(){
          this.getUsers();
        },
        methods: {
            addUser(){
              // this has been injected in master template and imported into app.js
              this.$Progress.start();
              // console.log("here");
              this.form.post('api/user');
              this.$Progress.finish();
              this.getUsers();
            },
            getUsers(data){
              // data = this.form.get('api/user');
              // u can also use:
              //  axios.get('api/user')
              // .then(({data}) =>(this.users = data, console.log(this.users)));
              fetch('api/user')
              .then(res => res.json())
                .then(res => {
                  // console.log(res.data);
                  this.users = res.data;
                  // console.log(this.users);
                }).catch(err => console.log(err))
            }
        }
    }
</script>
