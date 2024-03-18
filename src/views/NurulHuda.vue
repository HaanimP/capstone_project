<template>
    <NavbarComp/>
    <div class="container mt-5">
        <div class="nurul-huda-intro text-center mb-5">
            <h2>A Sneak Peek of Our Sister Company Nurul Huda</h2>
            <p>Nurul Huda is a distinguished purveyor of Islamic literature, dedicated to enlightening and enriching the lives of those seeking to deepen their understanding of Islam. Our collection ranges from the foundational texts of the Quran and Hadith to contemporary analyses of Islamic law, ethics, and spirituality. Whether you are taking your first steps towards discovering the essence of Islam or you are on a quest for profound scholarly insights, Nurul Huda offers a comprehensive repository. Our mission is to facilitate a journey of knowledge and discovery, providing resources that cater to both newcomers desiring an introduction to Islam and scholars seeking in-depth discussions on complex theological themes. Join us in exploring the rich tapestry of Islamic history, culture, and thought, as we strive to bridge gaps, foster understanding, and celebrate the diversity within the global Muslim community.</p>
        </div>
<div class="row">
    <div class="col-lg-4">
        <div class="card card-margin">
            <div class="card-header no-border">
                <h5 class="card-title">MOM</h5>
            </div>
            <div class="card-body pt-0">
                <div class="widget-49">
                    <div class="widget-49-title-wrapper">
                        <div class="widget-49-date-primary">
                            <span class="widget-49-date-day">09</span>
                            <span class="widget-49-date-month">apr</span>
                        </div>
                        <div class="widget-49-meeting-info">
                            <span class="widget-49-pro-title">PRO-08235 DeskOpe. Website</span>
                            <span class="widget-49-meeting-time">12:00 to 13.30 Hrs</span>
                        </div>
                    </div>
                    <ol class="widget-49-meeting-points">
                        <li class="widget-49-meeting-item"><span>Expand module is removed</span></li>
                        <li class="widget-49-meeting-item"><span>Data migration is in scope</span></li>
                        <li class="widget-49-meeting-item"><span>Session timeout increase to 30 minutes</span></li>
                    </ol>
                    <div class="widget-49-meeting-action">
                        <a href="#" class="btn btn-sm btn-flash-border-primary">View All</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-4">
        <div class="card card-margin">
            <div class="card-header no-border">
                <h5 class="card-title">MOM</h5>
            </div>
            <div class="card-body pt-0">
                <div class="widget-49">
                    <div class="widget-49-title-wrapper">
                        <div class="widget-49-date-warning">
                            <span class="widget-49-date-day">13</span>
                            <span class="widget-49-date-month">apr</span>
                        </div>
                        <div class="widget-49-meeting-info">
                            <span class="widget-49-pro-title">PRO-08235 Lexa Corp.</span>
                            <span class="widget-49-meeting-time">12:00 to 13.30 Hrs</span>
                        </div>
                    </div>
                    <ol class="widget-49-meeting-points">
                        <li class="widget-49-meeting-item"><span>Scheming module is removed</span></li>
                        <li class="widget-49-meeting-item"><span>App design contract confirmed</span></li>
                        <li class="widget-49-meeting-item"><span>Client request to send invoice</span></li>
                    </ol>
                    <div class="widget-49-meeting-action">
                        <a href="#" class="btn btn-sm btn-flash-border-warning">View All</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-4">
        <div class="card card-margin">
            <div class="card-header no-border">
                <h5 class="card-title">MOM</h5>
            </div>
            <div class="card-body pt-0">
                <div class="widget-49">
                    <div class="widget-49-title-wrapper">
                        <div class="widget-49-date-success">
                            <span class="widget-49-date-day">22</span>
                            <span class="widget-49-date-month">apr</span>
                        </div>
                        <div class="widget-49-meeting-info">
                            <span class="widget-49-pro-title">PRO-027865 Opera module</span>
                            <span class="widget-49-meeting-time">12:00 to 13.30 Hrs</span>
                        </div>
                    </div>
                    <ol class="widget-49-meeting-points">
                        <li class="widget-49-meeting-item"><span>Scope is revised and updated</span></li>
                        <li class="widget-49-meeting-item"><span>Time-line has been changed</span></li>
                        <li class="widget-49-meeting-item"><span>Received approval to start wire-frame</span></li>
                    </ol>
                    <div class="widget-49-meeting-action">
                        <a href="#" class="btn btn-sm btn-flash-border-success">View All</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
            <!-- Second row of cards (duplicated cards) -->
            <!-- Duplicate your card structure here with potentially different content if needed -->
            <!-- Example for one card, repeat for the others -->
            <div class="col-lg-4">
                <div class="card card-margin">
                    <div class="card-header no-border">
                        <h5 class="card-title">MOM</h5>
                    </div>
                    <div class="card-body pt-0">
                        <div class="widget-49">
                            <div class="widget-49-title-wrapper">
                                <div class="widget-49-date-primary">
                                    <span class="widget-49-date-day">XX</span>
                                    <span class="widget-49-date-month">XXX</span>
                                </div>
                                <div class="widget-49-meeting-info">
                                    <span class="widget-49-pro-title">PRO-XXXXX New Project</span>
                                    <span class="widget-49-meeting-time">XX:XX to XX.XX Hrs</span>
                                </div>
                            </div>
                            <ol class="widget-49-meeting-points">
                                <li class="widget-49-meeting-item"><span>Meeting point 1</span></li>
                                <li class="widget-49-meeting-item"><span>Meeting point 2</span></li>
                                <!-- Add more points as needed -->
                            </ol>
                            <div class="widget-49-meeting-action">
                                <a href="#" class="btn btn-sm btn-flash-border-primary">View All</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Repeat for the other two cards -->
        </div>
    </div>
</div>
    <FooterComponent/>
</template>
<script>
import NavbarComp from "@/components/NavbarComp.vue";
import FooterComponent from "@/components/FooterComp.vue";

export default {
  name: "NurulHuda",
  components: {
    NavbarComp,
    FooterComponent,
  },
}
</script>
<style>
body {
    background: #F4F7FD;
    margin-top: 20px;
}

.nurul-huda-intro h2 {
    font-size: 3rem; /* Increase size */
    font-weight: 800; /* Increase boldness */
    margin-bottom: 1rem; /* Adjust spacing as needed */
    color: #FFF; /* Set text color to white */
}

.nurul-huda-intro p {
    font-size: 1.5rem; /* Increase size */
    font-weight: 500; /* Make text bolder */
    color: #FFF; /* Set text color to white */
    max-width: 800px; /* Limit the width for better readability */
    margin: 0 auto 2rem; /* Center the description and add bottom margin */
}

.card-margin {
    margin-bottom: 1.875rem;
}

.card {
    border: 0;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    background-color: #ffffff;
}

.card-header {
    background: none;
    border-bottom: 1px solid #f0f0f0;
    padding: 0.9375rem;
}

.card-title {
    font-weight: 600;
    font-size: 1.25rem;
    color: #333;
}

.widget-49-date-primary, .widget-49-date-warning, .widget-49-date-success {
    background: linear-gradient(135deg, #6394f9 0%, #0a568c 100%);
    color: #ffffff;
}

.widget-49-date-warning {
    background: linear-gradient(135deg, #f9d976 0%, #f39f86 100%);
}

.widget-49-date-success {
    background: linear-gradient(135deg, #93f9b9 0%, #1d976c 100%);
}

.widget-49-date-day, .widget-49-date-month {
    font-weight: 600;
}

.widget-49-meeting-info span {
    display: block;
    color: #333;
    margin: 5px 0;
}

.widget-49-pro-title {
    font-weight: 600;
    font-size: 1rem;
}

.widget-49-meeting-time {
    font-size: 0.875rem;
    color: #666;
}

.widget-49-meeting-item {
    margin-bottom: 0.5rem;
}

.btn-flash-border-primary, .btn-flash-border-warning, .btn-flash-border-success {
    border: 2px solid;
    font-weight: 600;
    border-radius: 25px;
    padding: 0.375rem 1.25rem;
    transition: all 0.3s ease;
}

.btn-flash-border-primary {
    border-color: #6394f9;
    color: #6394f9;
}

.btn-flash-border-warning {
    border-color: #f9d976;
    color: #f9d976;
}

.btn-flash-border-success {
    border-color: #93f9b9;
    color: #93f9b9;
}

.btn-flash-border-primary:hover, .btn-flash-border-warning:hover, .btn-flash-border-success:hover {
    background: currentColor;
    color: #ffffff;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .widget-49-date-primary, .widget-49-date-warning, .widget-49-date-success {
        width: 3rem;
        height: 3rem;
    }

    .widget-49-date-day {
        font-size: 1.25rem;
    }

    .widget-49-date-month {
        font-size: 0.875rem;
    }

    .widget-49-meeting-info span {
        margin: 2px 0;
    }
}
</style>