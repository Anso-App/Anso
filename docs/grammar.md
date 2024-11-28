## Grammar

### variable in prompt {{}}

You can use `{{}}` to wrap variables in your pipeline prompts:

``` yaml
supports:
    - unit: string
prompt: pls express the result in {{unit}}
```

If you just want to input `{{}}`, please substitute with `\{{}}` .


### System variable

Anso will provide you with some system variables to better write prompts other content.

you can use them by `{{}}` in prompt or your yaml property:

``` yaml
prompt: Please write the corresponding terminal commands based on the current system: {{$platform}}

input:
    - $input
    - $region
output:
    - outingTips
```

system variables list:

| Variable Name | Meaning and Usage Notes                                          |
|---------------|-----------------------------------------------------------------|
| date          | Today's date in ISO format (YYYY-MM-DDTHH:MM:SSZ). |
| region        | Precise to the city area, indicating the user's geographical location.|
| language      | The user's language setting, such as Chinese, English, etc.|
| platform      | The system platform being used, includes Windows, macOS, Linux, Android, iOS.|
| os_version    | The version number of the operating system, such as Windows 10, macOS 11, etc.|
