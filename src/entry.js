/**
 * Created by tozawa on 2017/07/23.
 */

// require("jquery");
// require("bootstrap");
// require('bootstrap/dist/css/bootstrap.css');
import 'jquery'
// import $$ from "jquery-selector-cache";
import "jquery-selector-cache";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';


window.onload = () => {

    $$("#sign-in-or-out-button").on("click", (e) => {
        console.log("UNKO");
        // if (googleAuth.isSignedIn()) {
        //     // User is authorized and has clicked 'Sign out' button.
        //     googleAuth.signOut();
        // } else {
        //     // User is not signed in. Start Google auth flow.
        //     googleAuth.signIn();
        // }
    });


    // $$('#open-save-file-dialog').on('click', (e) => {
    //     $$('#save-file-dialog').modal('show');
    // });

};
