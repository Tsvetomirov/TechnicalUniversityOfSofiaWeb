

<?php
require_once($_SERVER['DOCUMENT_ROOT'].'/administration/header.php');
require_once($_SERVER['DOCUMENT_ROOT'].'/inc/glbFunc.php');
$gf = new glb_funcs();

$query = "SELECT id,title,name,office,tel,email,web,rank FROM stafflist";

$staffArray = $gf->selectQuery($query);


?>
  <!--<link href="../administration/css/edit-staff/style.css" rel="stylesheet"/>-->
<div class = "content">
<div class="row">

          <div class="col-lg-6 col-md-12" style = "max-width:100% !important;" >
            <div class="card ">
            <div class="card-header">
                <h4 class="card-title"> Update Records</h4>
              <form method="POST">
                  <div class="form-row">
                    <div class="col">
                        <input id="animated-search-input" name="edit" onkeyup="LiveSearch(this, '/administration/requests/staffLiveSearch.php')" class="form-control" type="text" value="">
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
                          Name
                        </th>
                        <th>
                          Title
                        </th>
                        <th>
                          Office
                        </th>
                        <th >
                          Telephone
                        </th>
                        <th >
                          Email
                        </th>
                        <th >
                          WebPage
                        </th>
                        <th >
                          Rank
                        </th>
                      </tr>
                    </thead>
                    <tbody>
            <?php foreach($staffArray as $key => $value){ ?>
                      <tr data-id = "<?php echo $value['id'];?>">
                        <td class = 'editable-field'>
                            <p><?php echo $value['name']?></p>
                        </td>
                        <td class = 'editable-field'>
                            <p><?php echo $value['title'];?></p>
                        </td>
                        <td class = 'editable-field'>
                           <p><?php echo $value['office'];?></p>
                        </td>
                        <td class = 'editable-field'>
                            <p><?php echo $value['tel'];?></p>
                        </td>
                        <td class = 'editable-field'>
                            <p><?php echo $value['email'];?></p>
                        </td>
                        <td class = 'editable-field'>
                            <p><?php echo $value['web'];?></p>
                        </td>
                        <td class = 'editable-field'>
                            <p><?php echo $value['rank'];?></p>
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