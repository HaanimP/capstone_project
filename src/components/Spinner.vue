<template>
    <div>
      <div class="d-flex justify-content-center">
        <div class="spinner">
          <div class="bounce1"></div>
          <div class="bounce2"></div>
          <div class="bounce3"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SpinnerComp'
  }
  </script>
  
  <style>
  .spinner {
    width: 70px;
    text-align: center;
  }
  
  .spinner > div {
    width: 18px;
    height: 18px;
    background-color: #007bff;
    
    border-radius: 100%;
    display: inline-block;
    animation: bounce 1.4s infinite ease-in-out both;
  }
  
  .spinner .bounce1 {
    animation-delay: -0.32s;
  }
  
  .spinner .bounce2 {
    animation-delay: -0.16s;
  }
  
  @keyframes bounce {
    0%, 80%, 100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
  </style>
  