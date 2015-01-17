Nightmare = require('nightmare')
$ = require('jquery')

new Nightmare()
  .goto('https://www.fbo.gov/index?s=opportunity&mode=list&tab=list')
  .inject('js','jquery-2.1.3.js')
  #.evaluate ->
    #console.log 'zerp'
    #$('#qs-posted').val('365')
    #$('#qs-type').val('p')
  #, (res) ->
    #console.log 'config done'
  #.click('btn')
  #.wait()
  .evaluate ->
    id = 1
    $('#row_' + id + ' .lst-cl lst-cl-first a[href]').val()
  , (res) ->
    console.log 'derp'
  #.screenshot('hello.png')
  .run()
