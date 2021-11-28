import "bootstrap/dist/css/bootstrap.min.css";


function Profile(){
     return(
        <>
        <div  className="brand1">
    <h2>Manange<span className="dash_title">
            Profile</span></h2> 

            <table id="profile" className="table table-striped">
                <tbody>
                <tr>
                    <th>Username</th>
                    <td>Karthick</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>karthicksrinivasan333@gmail.com</td>
                </tr>
                <tr>
                    <th>First Name</th>
                    <td>Karthick</td>
                </tr>
                <tr>
                    <th>Last Name</th>
                    <td>Srinivasan</td>
                </tr>
                <tr>
                    <th>Gender</th>
                    <td>Male</td>
                </tr>
                <tr>
                    <th>phone</th>
                    <td>6382216460</td>
                </tr>
                  <tr>
                    <th>Group</th>
                    <td><button type="button" className="btn btn-primary">Administration</button></td>
                </tr>
                </tbody>
            </table>
            </div>
        </>
    )
}

export default Profile;

