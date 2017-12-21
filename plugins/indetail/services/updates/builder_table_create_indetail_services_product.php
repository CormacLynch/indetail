<?php namespace Indetail\Services\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateIndetailServicesProduct extends Migration
{
    public function up()
    {
        Schema::create('indetail_services_product', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->string('name')->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('indetail_services_product');
    }
}
