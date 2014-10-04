var straw = new (require ('./vendor/laravel/straw/Straw'));


/*
 |----------------------------------------------------------------
 | Have a Drink
 |----------------------------------------------------------------
 |
 | Here, you'll find a nice fluent API for specifying which files
 | in your application should be compiled, watched, or merged.
 |
 */
straw.sip(function(please) {
    please.useSass()
          .runPHPUnit();
});


/*
 |----------------------------------------------------------------
 | Still Thirsty?
 |----------------------------------------------------------------
 |
 | If you'd like to override any of the default tasks, or even
 | specify your own, you may do so below.
 |
 | var gulp = require('gulp');
 | gulp.task('foo', function() {});
 |
 */