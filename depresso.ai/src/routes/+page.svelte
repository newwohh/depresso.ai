
<script lang="ts">
    import { onMount } from 'svelte';
  
    let userInput = '';
    let emotions: string[] = [];
  
    const analyzeEmotions = async () => {
      const response = await fetch('http://localhost:3000/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: userInput })
      });
  
      const data = await response.json();
      const { positive, negative, neutral } = data;
      emotions = [`Positive: ${positive}`, `Negative: ${negative}`, `Neutral: ${neutral}`];
    };
  
    onMount(async () => {
      // Placeholder for any initialization if needed
    });
  </script>
  
  <main>
    <textarea bind:value={userInput} placeholder="Enter text to analyze emotions"></textarea>
    <button on:click={analyzeEmotions}>Analyze Emotions</button>
  
    <div>

            <span>
                {emotions.map(emotion => {emotion})}
            </span>
    </div>
  </main>


  
  <style>
    textarea {
      width: 100%;
      height: 100px;
      margin-bottom: 10px;
    }
  </style>
  