<?php

require_once($_SERVER['DOCUMENT_ROOT'].'/administration/header.php');
require_once($_SERVER['DOCUMENT_ROOT'].'/inc/glbFunc.php');
$gf = new glb_funcs();



$query = "SELECT id, programme, programmename, coursename, optional, semester, code, lecturer FROM cources";

$staffArray = $gf->selectQuery($query);



?>


<div class = "content">
<div class="row">

          <div class="col-lg-6 col-md-12" style = "max-width:100% !important;" >
            <div class="card ">
              <div class="card-header">
                <form method="POST">
                  <div class="form-row">
                    <div class="col">
                        <input id="animated-search-input" onkeyup="LiveSearch(this, '/administration/requests/courcesLiveSearch.php')" class="form-control" type="text" value="">
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
                          Program
                        </th>
                        <th>
                          Program Name
                        </th>
                        <th>
                          Course Name
                        </th>
                        <th >
                          Optional
                        </th>
                        <th >
                          Semester
                        </th>
                        <th >
                          Code
                        </th>
                        <th >
                          Lecturer
                        </th>
                      </tr>
                    </thead>
                    <tbody>
            <?php foreach($staffArray as $key => $value){ ?>
                      <tr data-id = "<?php echo $value['id'];?>">
                        <td class = 'editable-field'>
                            <p><?php echo $value['programme']?></p>
                        </td>
                        <td class = 'editable-field'>
                            <p><?php echo $value['programmename'];?></p>
                        </td>
                        <td class = 'editable-field'>
                            <p><?php echo $value['coursename'];?></p>
                        </td>
                        <td class = 'editable-field'>
                           <p><?php echo $value['optional'];?></p>
                        </td>
                        <td class = 'editable-field'>
                            <p><?php echo $value['semester'];?></p>
                        </td>
                        <td class = 'editable-field'>
                            <p><?php echo $value['code'];?></p>
                        </td>
                        <td class = 'editable-field'>
                            <p><?php echo $value['lecturer'];?></p>
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