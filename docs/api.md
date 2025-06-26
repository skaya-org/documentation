---
sidebar_position: 2
---

# API Key Configuration 🔑

To unlock Skaya's powerful AI-powered code generation features, you need to configure an API key.

Currently, Skaya integrates with the Gemini API for its intelligent scaffolding capabilities. In future releases, support for dedicated Skaya API keys will be introduced.

## Obtaining Your API Key

You can obtain a Gemini API key from the following sources:

    [Google AI Studio](https://aistudio.google.com/app/apikey)

    [Google Cloud Console](https://console.cloud.google.com/apis/credentials)

## Configuring Your API Key

1. ### Environment Variable (Recommended)

Setting your API key as an environment variable is the most secure and recommended method, especially for CI/CD pipelines and production environments, as it prevents the key from being hardcoded or committed to version control.

Add the following line to your shell's configuration file (e.g., ~/.bashrc, ~/.zshrc, ~/.profile, or ~/.bash_profile for Linux/macOS, or via System Properties for Windows):

```bash
export SKAYA_API_KEY=your_gemini_api_key_here
```
After adding the variable, remember to reload your shell configuration (e.g., source ~/.bashrc or open a new terminal window).

2. Local .npmrc File
You can also store the API key in a .npmrc file at the root of your Skaya project. This is convenient for individual projects but less secure than environment variables if the file is committed to a public repository.

Execute the following command in your project's root directory:

```bash
echo 'skaya_api_key=your_gemini_api_key_here' >> .npmrc
```

## Best Practices

   - Never commit your API keys to version control (e.g., Git repositories), especially public ones. Use .gitignore to exclude .npmrc files if they contain sensitive information and rely on environment variables for deployment.

   - Restrict API Key Usage: If using the Google Cloud Console, apply API restrictions (e.g., by HTTP referrer or IP address) to your API key to limit its exposure.

   - Rotate Keys: Regularly rotate your API keys to minimize the impact of a potential compromise.

By properly configuring your API key, you can seamlessly integrate Skaya's AI capabilities into your development workflow.