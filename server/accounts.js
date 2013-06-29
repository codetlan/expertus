/**
 * Created with JetBrains PhpStorm.
 * User: lumartin
 * Date: 28/06/13
 * Time: 13:05
 * To change this template use File | Settings | File Templates.
 */
Accounts.onCreateUser(function (options, user) {
    console.log('=======onCreateUser========');
    console.log(options);
    var admins = ["lumartineck@gmail.com", "waldix86@gmail.com", "iam@armando.mx"];
    if (options.profile) {
        user.profile = user.services.google;
        user.profile.picture = user.profile.picture || 'images/profile/default_picture.png';

        if(admins.indexOf(user.profile.email) !== -1){
            user.profile.rol = "admin";
        }
    }
    return user;
});