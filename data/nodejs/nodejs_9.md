---
title: 파일시스템 만들기
category: nodejs
name: ""
---

## 계획

- 사용자가 원하는 폴더의 이름을 받아온다.
- 폴더 안에 video, captured, duplicated 폴더를 만든다.
- 폴더 안에 있는 파일들을 다 돌면서 해당하는 mp4/mov,png/aae, IMG_1234(IMG_E1234 -> duplication)

```javascript
// 원하는 인자를 받아올때는 process.argv
// app test, app일 실행하면서 원하는 폴더 이름도 전달
const folder = process.argv[2]; // test
if (!folder) {
  console.error("Please enter folder name in Pictures");
}

// 경로를 사용 (path), folder name 확인
const workingDir = path.join(os.homedir(), "Pictures", folder);
if (!folder || fs.existSync(workingDir)) {
  console.error("Please enter folder name in Pictures");
  return;
}

// 폴더 안에 video, captured, duplicated 폴더를 만든다.
videoDir = path.join(working, "video");
capturedDir = path.join(working, "captured");
duplicatedDir = path.join(working, "duplicated");

// 폴더를 만들고 일들을 처리해주기위해서
!fs.existsSync(videoDir) && fs.mkdirSync(videoDir);
!fs.existsSync(capturedDir) && fs.mkdirSync(capturedDir);
!fs.existsSync(duplicatedDir) && fs.mkdirSync(duplicatedDir);

// 폴더 안에 있는 파일들을 다 돌면서 해당하는 mp4/mov,png/aae, IMG_1234(IMG_E1234 -> duplication)
fs.promises
  .readdir(workingDir) //
  .then(processFiles);

function processFiles(files) {
  files.forEach((file) => {
    // 검사
    if (isVideoFile(file)) {
move(
  move(file,videioDire)
)
    } else if (isCaptured(file)) {
move(
  move(file,videioDire)
)
    } else if (isDuplicated(fils, file)) {
      move(
        move(file,videioDire)
      )
    }
  });
}

function isVideoFile(file) {
  const regExp = /(mp4|mov)$/gm;
  const match = file.match(regExp);
  return !!match; // match가 있다면 true, 아니면 false
}

function isCaptured(file) {
  const regExp = /(png|aae)$/gm;
  const match = file.match(regExp);
  return !!match;
}

function isDuplicated(files, file) {
  //IMG_XXX -> IMG_EXXX
  if (!file.startWith("IMG" || file.startWith("IMG_E"))) return false;
}

const edited = `IMG_E${file.split("_")}`;
const found files.find(f => f.includes(edited))
return !!found

function move(file,targetDir){
  const oldPath = path.join(workingDir, file);
  const newPath = path.join(targetDir, file);
  fs.promises().rename(oldPath, newPath).catch(console.erro)
}
```
