import { initScrollReveal } from "./scrollReveal.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeDescription(
  ".html",
  "HTML هي لغة قائمة على الترميز حيث نقوم بترميز العناصر لتحديد المعلومات التي ستعرضها الصفحة"
);
hoverChangeDescription(
  ".css",
  "هي لغة تنسيق لصفحات الويب تهتم بشكل وتصميم المواقع، صممت خصيصا لفصل التنسيق (الألوان - الخطوط - الأزرار....) عن محتوى المستند المكتوب (بلغة مثلا إتش تي إم إل HTML) وينطبق ذلك على الألوان والخطوط والصور والخلفيات التي تستخدم في الصفحات، بمرونة وسهولة تامة"
);
hoverChangeDescription(
  ".js",
  "JavaScript عبارة عن لغة برمجة مفسرة ذات مستوى عالٍ ومهيكلة ومتعددة النماذج ومكتوبة ديناميكيًا"
);
hoverChangeDescription(
  ".sass",
  "Sass (معالج css المسبق) هي لغة أنماط. إنها لغة برمجة نصية بسيطة مستخدمة في ملفات Sass"
);
hoverChangeDescription(
  ".react",
  "ReactJS هي مكتبة JavaScript مفتوحة المصدر تركز على إنشاء واجهات مستخدم على صفحات الويب"
);
hoverChangeDescription(
  ".next",
  "نيكست جي أس هو إطار عمل لتطوير الويب مفتوح المصدر مبني فوق Node.js لتمكين تطبيقات الويب التي تستخدم مكتبة رياكت بإجراء بعض المميزات مثل العرض من جانب الخادم وإنشاء مواقع الويب"
);
hoverChangeDescription(
  ".styled",
  "Styled Components هي مكتبة تستخدم مفهوم CSS-in-JS ، أي أنها تسمح لنا بكتابة أكواد CSS داخل Javascript"
);
hoverChangeDescription(
  ".tailwind",
  "Tailwind CSS عبارة عن إطار عمل مصمم لزيادة إمكانات CSS القديمة الجيدة إلى أقصى حد والاستفادة منها إلى أبعد من ذلك."
);
