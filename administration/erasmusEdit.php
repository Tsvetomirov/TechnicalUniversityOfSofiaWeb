<?php

require_once($_SERVER['DOCUMENT_ROOT'].'/administration/header.php');
require_once($_SERVER['DOCUMENT_ROOT'].'/inc/glbFunc.php');
$gf = new glb_funcs();



$query = "SELECT id,uni,country,www,timeperiod,pdf,remarks,logo FROM Erasmus";

$staffArray = $gf->selectQuery($query);



?>
  <!--<link href="../administration/css/black-dashboard.min.css" rel="stylesheet"/> -->

<div class = "content">
<div class="row">

          <div class="col-lg-6 col-md-12" style = "max-width:100% !important;" >
            <div class="card ">
            <div class="card-header">
                <h4 class="card-title"> Update Records</h4>
              <form method="POST">
                  <div class="form-row">
                    <div class="col">
                        <input id="animated-search-input" onkeyup="LiveSearch(this, '/administration/requests/erasmusLiveSearch.php')" class="form-control" type="text" value="">
                        </div>
                    </div>
                </form>
            </div>
              <div class="card-body">
                <div class="table-responsive" style = "overflow:auto !important;">
                  <table class="table tablesorter " id="">
                    <thead class=" text-primary">
                      <tr>
                        <th>
                          University
                        </th>
                        <th>
                          Country
                        </th>
                        <th>
                          Website
                        </th>
                        <th >
                          Time period
                        </th>
                        <th >
                          Pdf Name
                        </th>
                        <th >
                          Remakrs
                        </th>
                        <th >
                          Logo
                        </th>
                      </tr>
                    </thead>
                    <tbody>
            <?php foreach($staffArray as $key => $value){ ?>
                      <tr data-id = "<?php echo $value['id'];?>">
                        <td class = 'editable-field'>
                            <p><?php echo $value['uni']?></p>
                        </td>
                        <td class = 'editable-field'>
                            <p><?php echo $value['country'];?></p>
                        </td>
                        <td class = 'editable-field'>
                           <p><?php echo $value['www'];?></p>
                        </td>
                        <td class = 'editable-field'>
                            <p><?php echo $value['timeperiod'];?></p>
                        </td>
                        <td class = 'editable-field'>
                            <p><?php echo $value['pdf'];?></p>
                        </td>
                        <td class = 'editable-field'>
                            <p><?php echo $value['remarks'];?></p>
                        </td>
                        <td class = "editable-field">
                            <p><?php echo $value['logo'];?></p>
                        </td>
                        <td id = "edit-staff" class = "edit-staff">
                            <a>Edit</a>
                        </td>
                        <td id = "remove-staff" class = "remove-staff-class">
                            <a>Remove</a>
                        </td>
                      </tr>
            <?php } ?>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
</div>

<?php
require_once($_SERVER['DOCUMENT_ROOT'].'/administration/footer.php');      
?>