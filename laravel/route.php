<?php

Route::get('form', function(){
 return View::make('form');
});

Route::any('form-submit', function(){

#$filename = Input::file('file')->move(__DIR__.'/storage/',Input::file('file'))->getFilename();
$contents = "";

    $destinationPath = __DIR__.'/storage/';
    $filename = 'input_'. date('Ymd_His') .'.docx';
    $fileout = 'input_'. date('Ymd_His') .'.html';
    Input::file('file')->move($destinationPath, $filename);

#echo $filename."<br />".$fileout;
chdir( __DIR__.'/storage/');
$cmd = "mammoth $filename $fileout";
exec($cmd);
try
{
    $contents = File::get(__DIR__.'/storage/'.$fileout);
}
catch (Illuminate\Filesystem\FileNotFoundException $exception)
{
    die("The file doesn't exist");
}



 return View::make('tax', array('contents' => $contents));
});
