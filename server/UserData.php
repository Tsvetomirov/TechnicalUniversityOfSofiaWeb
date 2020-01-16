<?php
Header("Content-Type: application/json");
isset($_SESSION['user_id']) ? print_r(json_encode($_SESSION['user_id'])):print_r(json_encode([false]));