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
                      <!-- <th>Date</th> -->
                      <th>Type</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>657</td>
                      <td>Bob Doe</td>
                      <td>admin@g.com</td>
                      
                      <td><span class="tag tag-primary">User</span></td>
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
        <form action="" method="post">

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
                <select v-model="form.usertype" id="usertype" class="form-control" name="text" usertype="usertype" :class="{'is-valid' : form.errors.has('usertype')}">
                    <option id="">Select User Role</option>
                    <option id="admin">Admin</option>
                    <option id="user">Standard User</option>
                    <option id="author">Author</option>
                </select>
                <has-error :form="form" field="usertype"></has-error>
            </div>    

            <div class="form-group">
                <textarea v-model="form.bio" id="bio" class="form-control" placeholder="Short Bio (optional)" name="bio" :class="{'is-valid' : form.errors.has('bio')}"></textarea>
                <has-error :form="form" field="bio"></has-error>
            </div>            
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger fas fa-window-close" data-dismiss="modal"> Close</button>
        <button type="button" class="btn btn-primary fas fa-user"> Create User</button>
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
                    usertype: '',
                    image: '',
                    bio: ''
                }),
                users: []

            }
        },
        created(){

        },
        methods:{
            getUsers(){
                fetch('')

            }
        }
    }
</script>
