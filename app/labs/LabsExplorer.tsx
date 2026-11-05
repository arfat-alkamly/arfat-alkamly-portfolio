"use client";

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  Activity, ArrowUpLeft, Binary, Bug, CheckCircle2, ChevronDown, Cloud,
  Code2, Cpu, Database, FileSearch, FlaskConical, Fingerprint, Globe,
  HardDrive, LockKeyhole, Network, Search, Server, Shield, ShieldCheck,
  Siren, Terminal, Wifi, Workflow, Factory, BrainCircuit, ScanSearch
} from 'lucide-react';

type Lab = {
  id: string; name: string; en: string; category: string; status: string;
  summary: string; goal: string; environment: string; tools: string[];
  objectives: string[]; workflow: string[]; safety: string; outputs: string[];
  Icon: typeof Shield;
};

const labs: Lab[] = [
  {
    id: 'network-defense', name: 'أمن الشبكات والدفاع السيبراني', en: 'NETWORK SECURITY & DEFENSE', category: 'الدفاع والشبكات',
    status: 'مسار تعلم وتطبيق', summary: 'تصميم الشبكات وتقسيمها ومراقبتها وتقوية حدودها، من إعداد الجدار الناري إلى تحليل الحزم.',
    goal: 'بناء شبكة اختبار آمنة، وتطبيق ضوابط الحماية، ومراقبة الاتصالات واكتشاف السلوك الشبكي غير المعتاد.',
    environment: 'شبكات افتراضية متعددة المناطق · Linux وWindows · موجهات ومحولات افتراضية · أجهزة جدار ناري تجريبية.',
    tools: ['pfSense / OPNsense', 'iptables / nftables', 'Wireshark', 'Suricata', 'Zeek', 'Cisco Packet Tracer'],
    objectives: ['تصميم VLANs وتقسيم الشبكة ومناطق الثقة', 'إنشاء قواعد Firewall والتحقق من أقل صلاحية', 'فهم IDS/IPS وضبط قواعد الكشف', 'تحليل PCAP وDNS وTCP والتدفقات', 'إعداد خرائط الأصول ومراقبة الخدمات'],
    workflow: ['رسم الطوبولوجيا وتحديد الأصول', 'تطبيق التقسيم والسياسات', 'توليد حركة مرور اختبارية', 'تحليل التنبيهات والتحقق من الضوابط'],
    safety: 'تُجرى الاختبارات داخل شبكة افتراضية مملوكة أو مصرح بها. لا يُفحص أي عنوان عام أو شبكة خارج نطاق المختبر.',
    outputs: ['مخطط الشبكة ومناطق الثقة', 'قواعد الجدار الناري ومبرراتها', 'ملخص PCAP ومؤشرات الاتصال', 'نتائج تحقق IDS/IPS'],
    Icon: Network
  },
  {
    id: 'pentest', name: 'اختبار الاختراق والفريق الأحمر', en: 'PENETRATION TESTING & RED TEAMING', category: 'التقييم الهجومي',
    status: 'مسار تعلم وتطبيق', summary: 'تقييم أمني منظم للأنظمة والخدمات والتطبيقات ضمن نطاق اختبار محدد ومصرح به.',
    goal: 'تطبيق منهجية تقييم تبدأ بالاستطلاع المنضبط وتنتهي بإثبات الأثر وكتابة توصيات معالجة قابلة للتنفيذ.',
    environment: 'مختبر افتراضي معزول · أهداف تدريبية مثل Metasploitable وOWASP Broken Web Apps · لقطات استرجاع.',
    tools: ['Kali Linux', 'Nmap', 'Metasploit Framework', 'Burp Suite', 'Nuclei', 'testssl.sh'],
    objectives: ['تحديد النطاق وقواعد الاشتباك ROE', 'حصر الخدمات والإصدارات داخل المختبر', 'التحقق من الثغرات دون إحداث ضرر', 'تقدير الخطورة والأثر ومسارات الوصول', 'صياغة تقرير تنفيذي وتقني مع إعادة اختبار'],
    workflow: ['اعتماد النطاق وقواعد الاختبار', 'جمع المعلومات وحصر السطح', 'التحقق الآمن من نقاط الضعف', 'تقرير الأدلة وخطة المعالجة'],
    safety: 'محاكاة الهجمات تقتصر على أهداف تدريبية أو أنظمة يملكها المستخدم أو لديه تصريح مكتوب لاختبارها. لا يتضمن المسار استهداف أطراف حقيقية.',
    outputs: ['وثيقة النطاق وقواعد الاشتباك', 'سجل النتائج المصنفة حسب الخطورة', 'أدلة تحقق منزوعة البيانات الحساسة', 'تقرير المعالجة وإعادة الاختبار'],
    Icon: ScanSearch
  },
  {
    id: 'forensics', name: 'التحقيق الجنائي الرقمي والاستجابة للأدلة', en: 'DIGITAL FORENSICS & EVIDENCE', category: 'التحقيق والاستجابة',
    status: 'مسار تعلم', summary: 'اقتناء الأدلة الرقمية وحفظ سلامتها وتحليل أنظمة الملفات والذاكرة والسجلات.',
    goal: 'اتباع إجراءات جنائية قابلة للتكرار تحافظ على سلامة الدليل وتربط الأحداث بخط زمني واضح.',
    environment: 'صور أقراص تدريبية · ملفات ذاكرة RAM · أجهزة افتراضية · نسخ أدلة للقراءة فقط.',
    tools: ['Autopsy / Sleuth Kit', 'FTK Imager', 'Volatility 3', 'KAPE', 'Plaso / log2timeline', 'ExifTool'],
    objectives: ['توثيق سلسلة الحيازة Chain of Custody', 'حساب Hash والتحقق من سلامة النسخ', 'تحليل الملفات المحذوفة والبيانات الوصفية', 'فحص الذاكرة والعمليات والاتصالات', 'بناء Timeline من سجلات متعددة'],
    workflow: ['تأمين المصدر وتوثيق الاستلام', 'إنشاء نسخة جنائية والتحقق منها', 'تحليل الآثار والبيانات', 'ربط النتائج وكتابة تقرير محايد'],
    safety: 'تُستخدم صور أقراص وذاكرة تدريبية أو أدلة يملكها صاحبها مع تفويض واضح. لا تُستخرج بيانات شخصية من أجهزة الغير.',
    outputs: ['سجل سلسلة الحيازة', 'قيم Hash للأدلة', 'خط زمني للأحداث', 'تقرير النتائج والقيود الفنية'],
    Icon: FileSearch
  },
  {
    id: 'malware', name: 'تحليل البرمجيات الخبيثة والهندسة العكسية', en: 'MALWARE ANALYSIS & REVERSE ENGINEERING', category: 'التحقيق والاستجابة',
    status: 'بيئة معزولة مخططة', summary: 'تحليل الملفات المشبوهة ساكنًا وديناميكيًا وفهم سلوكها ومؤشرات الاختراق.',
    goal: 'فهم بنية العينة وسلوكها ومؤشرات الاستمرارية والاتصال دون تعريض النظام المضيف أو الشبكة للخطر.',
    environment: 'Sandbox معزول · لقطات نظيفة · شبكة محاكاة بلا خروج افتراضي · عينات تعليمية غير ضارة عند التدريب.',
    tools: ['Ghidra', 'Cutter / radare2', 'Detect It Easy', 'YARA', 'PE-bear', 'REMnux'],
    objectives: ['فحص البصمات والبيانات الوصفية والسلاسل', 'قراءة بنية PE وELF ومكتباتها', 'فهم تدفق التنفيذ والاستدعاءات', 'مراقبة الملفات والعمليات والاتصالات', 'كتابة قواعد YARA ومؤشرات IOC'],
    workflow: ['التحقق من العزل واللقطة النظيفة', 'تحليل ساكن دون تشغيل', 'تحليل ديناميكي في Sandbox مضبوط', 'استخراج المؤشرات وكتابة التقرير'],
    safety: 'لا تُشغّل عينات مجهولة على النظام الأساسي أو شبكة متصلة. تُعطّل مشاركة الحافظة والمجلدات، ويُمنع الاتصال الخارجي افتراضيًا.',
    outputs: ['بطاقة تعريف العينة وHash', 'مخطط السلوك ومؤشرات IOC', 'قواعد كشف YARA تجريبية', 'تقرير تحليل وحدود الاستنتاج'],
    Icon: Bug
  },
  {
    id: 'web-appsec', name: 'أمن تطبيقات الويب وواجهات API', en: 'WEB & API APPLICATION SECURITY', category: 'أمن التطبيقات',
    status: 'مسار تعلم وتطبيق', summary: 'اختبار ضوابط الويب وواجهات API وفق OWASP Top 10 وAPI Security Top 10.',
    goal: 'تقييم المصادقة والجلسات والتحكم بالوصول والتحقق من المدخلات وحماية البيانات في تطبيقات تدريبية.',
    environment: 'OWASP Juice Shop وDVWA · تطبيقات API محلية · متصفح وأدوات Proxy داخل شبكة اختبار.',
    tools: ['Burp Suite', 'OWASP ZAP', 'Postman', 'OWASP ZAP API Scan', 'Semgrep', 'JWT tooling'],
    objectives: ['اختبار Broken Access Control وIDOR', 'مراجعة المصادقة وإدارة الجلسات', 'التحقق من مخاطر Injection وXSS', 'فحص إعدادات CORS وCSRF وSecurity Headers', 'اختبار صلاحيات API وحدود المعدل'],
    workflow: ['تحديد التطبيق والأدوار والبيانات', 'رسم نقاط الدخول ومسارات API', 'اختبار الضوابط بحسابات تجريبية', 'تقرير الثغرات وخطوات الإصلاح'],
    safety: 'تُختبر تطبيقات محلية أو تدريبية أو مصرح بها فقط، مع حسابات وبيانات اصطناعية. لا تُرسل حمولات اختبار إلى مواقع عامة.',
    outputs: ['خريطة سطح الهجوم', 'نتائج OWASP مصنفة', 'طلبات واستجابات منقحة', 'توصيات إصلاح واختبارات تحقق'],
    Icon: Globe
  },
  {
    id: 'soc', name: 'مركز العمليات الأمنية والاستجابة للحوادث', en: 'SOC & INCIDENT RESPONSE', category: 'الدفاع والشبكات',
    status: 'مسار تعلم وتطبيق', summary: 'مراقبة التنبيهات وربط الأحداث وإدارة الحوادث عبر SIEM وعمليات الاستجابة.',
    goal: 'محاكاة دورة عمل SOC من استقبال التنبيه وفرزه إلى التحقيق والاحتواء والتعلم بعد الحادث.',
    environment: 'شبكة مختبرية مع Windows/Linux endpoints · خادم سجلات مركزي · سيناريوهات محاكاة آمنة.',
    tools: ['Wazuh', 'Elastic Security', 'Splunk (أساسيات)', 'Sysmon', 'TheHive', 'Shuffle SOAR'],
    objectives: ['جمع السجلات وتوحيدها وربط الأحداث', 'بناء قواعد كشف وتنبيهات قابلة للقياس', 'فرز التنبيهات وتقليل الإيجابيات الكاذبة', 'إنشاء Playbooks للاستجابة', 'قياس MTTD وMTTR وتوثيق الدروس'],
    workflow: ['توليد أحداث اختبارية', 'استقبال وربط السجلات', 'فرز التنبيه والتحقيق', 'احتواء تجريبي وتقرير ما بعد الحادث'],
    safety: 'تُستخدم أحداث اصطناعية أو محاكاة داخل المختبر. لا تُنفّذ إجراءات احتواء على أجهزة إنتاجية أو حسابات حقيقية.',
    outputs: ['لوحة تنبيهات SIEM', 'قواعد كشف موثقة', 'سجل Incident Case', 'Playbook واستعراض ما بعد الحادث'],
    Icon: Siren
  },
  {
    id: 'crypto', name: 'التشفير وأمن البيانات', en: 'CRYPTOGRAPHY & DATA SECURITY', category: 'أمن البيانات والهوية',
    status: 'مسار تعلم', summary: 'تطبيق التشفير وإدارة المفاتيح والتوقيعات الرقمية والتحقق من سلامة البيانات.',
    goal: 'فهم الاستخدام الصحيح للخوارزميات والبروتوكولات ومخاطر إدارة المفاتيح بدل ابتكار تشفير غير موثوق.',
    environment: 'بيئة برمجية محلية · ملفات اختبار · شهادات ومفاتيح تجريبية غير مرتبطة ببيانات حقيقية.',
    tools: ['OpenSSL', 'Python cryptography', 'GnuPG', 'Hashcat (عينات تعليمية)', 'Key management concepts'],
    objectives: ['التمييز بين التشفير المتماثل وغير المتماثل', 'استخدام Hash وHMAC للتحقق من السلامة', 'إنشاء وتحقق التوقيعات الرقمية', 'فهم PKI والشهادات وTLS', 'دراسة التخزين والتدوير والإبطال الآمن للمفاتيح'],
    workflow: ['تحديد نموذج التهديد', 'اختيار بدائيات قياسية معتمدة', 'تنفيذ حالات اختبار', 'تحليل النتائج ومخاطر دورة حياة المفتاح'],
    safety: 'تُستخدم مفاتيح وبيانات اصطناعية. لا تُرفع مفاتيح خاصة أو أسرار إنتاجية إلى المستودعات أو التقارير.',
    outputs: ['تجارب تشفير موثقة', 'نتائج تحقق التوقيع والسلامة', 'مخطط دورة حياة المفتاح', 'ملاحظات مراجعة تصميم تشفيري'],
    Icon: Fingerprint
  },
  {
    id: 'iot', name: 'أمن إنترنت الأشياء والأنظمة المضمنة', en: 'IOT & EMBEDDED DEVICE SECURITY', category: 'الأجهزة والأنظمة المتخصصة',
    status: 'مسار بحث وتطبيق', summary: 'تقييم أمن الأجهزة الذكية وبروتوكولات الاتصال والبرمجيات الثابتة وواجهات التصحيح.',
    goal: 'فهم سطح الهجوم المادي والمنطقي للأجهزة، وتحديد ضوابط التحديث والإقلاع والاتصال الآمن.',
    environment: 'لوحات تطوير مملوكة · أجهزة IoT تدريبية · Firmware تجريبي · شبكة لاسلكية منفصلة.',
    tools: ['ESP32', 'Raspberry Pi', 'Binwalk', 'EMBA', 'MQTT Explorer', 'Logic Analyzer'],
    objectives: ['مراجعة بروتوكولات MQTT وBLE وWi-Fi', 'فحص Firmware واستخراج مكوناته', 'مراجعة الأسرار ومفاتيح الاتصال المخزنة', 'فهم Secure Boot والتحديث الموقّع', 'تقييم واجهات UART/JTAG المصرح بها'],
    workflow: ['تحديد الجهاز ومصدر Firmware', 'استخراج البنية وتحليل الإعدادات', 'مراجعة الاتصالات والواجهات', 'اقتراح تقوية وتحديث آمن'],
    safety: 'يقتصر الفحص المادي على أجهزة مملوكة أو مصرح بها. لا تُعطّل أجهزة أو مستشعرات مستخدمة في خدمات حقيقية.',
    outputs: ['قائمة مكونات Firmware', 'خريطة واجهات وبروتوكولات', 'نتائج مراجعة الأسرار والإعدادات', 'توصيات Secure Boot والتحديث'],
    Icon: Cpu
  },
  {
    id: 'ics', name: 'أمن الأنظمة الصناعية والبنية التحتية', en: 'ICS / SCADA & OT SECURITY', category: 'الأجهزة والأنظمة المتخصصة',
    status: 'مسار تخصصي مخطط', summary: 'فهم مخاطر OT وSCADA وتقسيم الشبكات الصناعية ومراقبة البروتوكولات التشغيلية.',
    goal: 'دراسة حماية أنظمة التحكم الصناعي مع إعطاء الأولوية للسلامة والتوافر واستمرارية التشغيل.',
    environment: 'محاكيات PLC وHMI · شبكة OT افتراضية منفصلة · بيانات تشغيلية اصطناعية.',
    tools: ['OpenPLC', 'Factory I/O', 'Wireshark', 'Conpot', 'MITRE ATT&CK for ICS', 'OPC UA'],
    objectives: ['التمييز بين IT وOT ومتطلبات السلامة', 'رسم مناطق وقنوات Purdue Model', 'فهم Modbus وOPC UA على مستوى البروتوكول', 'مراجعة الوصول البعيد وإدارة التغيير', 'ربط التهديدات بضوابط دفاعية'],
    workflow: ['إنشاء نموذج عملية افتراضية', 'رسم الأصول ومناطق الشبكة', 'مراقبة حركة OT الاصطناعية', 'تحليل المخاطر وخطة التقوية'],
    safety: 'المحاكاة افتراضية فقط. يمنع اختبار أو إرسال أوامر إلى PLC أو SCADA أو منشأة صناعية حقيقية.',
    outputs: ['رسم معماري لمناطق OT', 'قائمة أصول ومخاطر', 'ملخص تحليل بروتوكول', 'خطة تقوية واستجابة'],
    Icon: Factory
  },
  {
    id: 'range', name: 'الميادين السيبرانية والمحاكاة', en: 'CYBER RANGE & PURPLE TEAM', category: 'المحاكاة والتدريب',
    status: 'تصميم مسار متقدم', summary: 'بيئة تدريب متعددة الفرق لتمارين Red Team وBlue Team وPurple Team وسيناريوهات متدرجة.',
    goal: 'تطوير مهارات العمل الجماعي والقياس والتحقق من فعالية الضوابط ضمن سيناريوهات قابلة لإعادة التشغيل.',
    environment: 'شبكات افتراضية قابلة لإعادة البناء · أهداف تدريبية · مراقبة مركزية · سيناريوهات محددة.',
    tools: ['MITRE CALDERA', 'Atomic Red Team', 'DetectionLab', 'Proxmox / VMware', 'Wazuh', 'Terraform'],
    objectives: ['تصميم سيناريوهات وفق ATT&CK', 'توزيع أدوار الفرق وقواعد اللعب', 'قياس تغطية الكشف والاستجابة', 'تنفيذ جلسات Purple Team للتحسين', 'توثيق الدروس ومؤشرات الأداء'],
    workflow: ['اختيار سيناريو وأهداف تعلم', 'تهيئة الشبكة والأدوار', 'تنفيذ محاكاة مضبوطة', 'مراجعة الكشف والاستجابة والتحسين'],
    safety: 'تُستخدم محاكاة وأهداف تدريبية فقط، مع حدود موارد وشبكات واضحة. لا توجد اتصالات هجومية خارج بيئة التدريب.',
    outputs: ['وثيقة سيناريو وتمرين', 'مصفوفة ATT&CK', 'قياسات الكشف والاستجابة', 'تقرير مراجعة Purple Team'],
    Icon: Workflow
  },
  {
    id: 'cloud', name: 'أمن الحوسبة السحابية', en: 'CLOUD SECURITY & CONTAINER DEFENSE', category: 'الدفاع والشبكات',
    status: 'مسار تعلم', summary: 'تقييم إعدادات السحابة والهوية والتخزين والشبكات والحاويات وفق مبدأ أقل صلاحية.',
    goal: 'تحديد أخطاء التهيئة الشائعة وبناء ضوابط للرصد وإدارة الأسرار وحماية أحمال العمل السحابية.',
    environment: 'حسابات Sandbox أو محاكيات محلية · Docker · Kubernetes محلي · بيانات وموارد تجريبية.',
    tools: ['Prowler', 'ScoutSuite', 'Trivy', 'Checkov', 'Docker', 'Kubernetes'],
    objectives: ['مراجعة IAM والأدوار والصلاحيات', 'فحص التخزين المكشوف وسياسات الشبكة', 'تحليل صور الحاويات والاعتماديات', 'مراجعة Secrets وIaC', 'فهم التسجيل والمراقبة والاستجابة'],
    workflow: ['إنشاء بيئة تجريبية محدودة', 'فحص الإعدادات والبنية', 'تصنيف المخاطر حسب الأثر', 'تطبيق الإصلاح وإعادة الفحص'],
    safety: 'تُستخدم حسابات تجريبية بحدود إنفاق وصلاحيات دنيا. لا تُختبر حسابات سحابية أو موارد لا يملك المستخدم تصريحًا بها.',
    outputs: ['تقرير Cloud Posture', 'نتائج فحص IaC والحاويات', 'مصفوفة IAM', 'قائمة معالجة مرتبة'],
    Icon: Cloud
  },
  {
    id: 'devsecops', name: 'أمن البرمجيات وسلاسل التوريد', en: 'SECURE SDLC & DEVSECOPS', category: 'أمن التطبيقات',
    status: 'مسار تعلم وتطبيق', summary: 'دمج الفحوص الأمنية في دورة التطوير ومراجعة الشفرة والاعتماديات وخطوط CI/CD.',
    goal: 'تحويل الأمن إلى ضوابط مستمرة من التصميم والكتابة إلى البناء والنشر ومراقبة المكونات.',
    environment: 'مستودعات تدريبية · CI pipelines · تطبيقات تجريبية · بيئة بناء منفصلة.',
    tools: ['Semgrep', 'CodeQL', 'Gitleaks', 'Dependabot', 'Trivy', 'OWASP ASVS'],
    objectives: ['تطبيق Threat Modeling مبسط', 'تشغيل SAST وDAST وSCA', 'كشف الأسرار والاعتماديات الضعيفة', 'مراجعة صلاحيات CI/CD وحماية artifacts', 'صياغة معايير Secure Coding'],
    workflow: ['مراجعة التصميم والمتطلبات', 'فحص الشفرة والاعتماديات', 'دمج بوابات أمنية في CI', 'معالجة النتائج وتوثيق الاستثناءات'],
    safety: 'يُفحص كود مملوك أو مفتوح المصدر وفق شروط ترخيصه. لا تُنشر نتائج غير متحقق منها أو أسرار مكشوفة.',
    outputs: ['Threat Model', 'تقرير SAST/SCA/DAST', 'قائمة اعتماديات ومخاطر', 'قواعد CI Security'],
    Icon: Code2
  },
  {
    id: 'database', name: 'أمن قواعد البيانات والخصوصية', en: 'DATABASE SECURITY & PRIVACY', category: 'أمن البيانات والهوية',
    status: 'مسار تعلم', summary: 'تقوية قواعد البيانات والتحكم في الوصول ومراجعة التدقيق والتشفير وحماية البيانات.',
    goal: 'تطبيق مبدأ أقل صلاحية وحماية البيانات أثناء التخزين والنقل مع مراقبة أنشطة قواعد البيانات.',
    environment: 'Oracle Database وPostgreSQL وSQLite محلية · بيانات اصطناعية · نسخ احتياطية تجريبية.',
    tools: ['Oracle Audit', 'PostgreSQL roles', 'SQLCipher', 'pgAudit', 'OWASP Database Security'],
    objectives: ['مراجعة الأدوار والمنح والصلاحيات', 'منع حقن SQL عبر الاستعلامات المعلّمة', 'تفعيل التدقيق ومراجعة السجلات', 'حماية النسخ الاحتياطية والبيانات الحساسة', 'تطبيق إخفاء البيانات وتقليلها'],
    workflow: ['إنشاء قاعدة وبيانات اصطناعية', 'مراجعة الصلاحيات والإعدادات', 'اختبار التدقيق والنسخ الاحتياطي', 'توثيق المخاطر والمعالجة'],
    safety: 'تُستخدم بيانات اصطناعية فقط. لا تُجرى اختبارات على قواعد إنتاجية أو بيانات شخصية دون تفويض.',
    outputs: ['مصفوفة صلاحيات DB', 'نتائج مراجعة التدقيق', 'قائمة تحقق للنسخ الاحتياطي', 'توصيات خصوصية وتقليل البيانات'],
    Icon: Database
  },
  {
    id: 'identity', name: 'أمن الهوية وإدارة الوصول', en: 'IDENTITY, IAM & ZERO TRUST', category: 'أمن البيانات والهوية',
    status: 'مسار تخصصي', summary: 'إدارة دورة حياة الحسابات والمصادقة متعددة العوامل والامتيازات والوصول المشروط.',
    goal: 'تصميم نموذج هوية يقلل الامتيازات الدائمة ويجعل الوصول قائمًا على السياق والحاجة.',
    environment: 'Active Directory تجريبي · Keycloak · حسابات اختبار · تطبيقات محلية.',
    tools: ['Keycloak', 'LDAP', 'OAuth 2.0', 'OpenID Connect', 'FIDO2 concepts', 'BloodHound CE (تحليل مختبر)'],
    objectives: ['فهم SSO وFederation وMFA', 'مراجعة دورة إنشاء الحساب وإلغائه', 'تحليل الحسابات ذات الامتيازات', 'تطبيق RBAC ومبادئ Zero Trust', 'مراجعة سجلات المصادقة والجلسات'],
    workflow: ['رسم تدفق الهوية والتطبيقات', 'تعريف الأدوار والسياسات', 'اختبار سيناريوهات دخول تجريبية', 'مراجعة الامتيازات والسجلات'],
    safety: 'تُستخدم هويات اختبارية فقط. لا تُجمع كلمات مرور أو رموز جلسات لمستخدمين حقيقيين.',
    outputs: ['مخطط تدفق المصادقة', 'مصفوفة أدوار وصلاحيات', 'قائمة مراجعة MFA', 'توصيات تقليل الامتيازات'],
    Icon: Fingerprint
  },
  {
    id: 'ai-security', name: 'أمن الذكاء الاصطناعي ونماذج اللغة', en: 'AI SECURITY & LLM RED TEAMING', category: 'المحاكاة والتدريب',
    status: 'مسار بحث وتعلم', summary: 'دراسة تهديدات أنظمة الذكاء الاصطناعي والبيانات والنماذج وسلاسل الأدوات.',
    goal: 'تقييم مخاطر تطبيقات AI بصورة آمنة، تشمل سلامة المدخلات والمخرجات والبيانات والتكاملات.',
    environment: 'نماذج محلية أو تطبيقات تجريبية · بيانات اصطناعية · أدوات تقييم غير متصلة بأنظمة إنتاج.',
    tools: ['OWASP Top 10 for LLMs', 'MITRE ATLAS', 'Promptfoo', 'Garak', 'MLflow', 'Model cards'],
    objectives: ['فهم Prompt Injection وتسريب البيانات', 'اختبار حدود الثقة في RAG ومصادر المعرفة', 'مراجعة صلاحيات الأدوات والوكلاء', 'تقييم سلامة المخرجات والتحيز والخصوصية', 'توثيق التهديدات وضوابط التخفيف'],
    workflow: ['رسم تدفق البيانات والأدوات', 'بناء حالات اختبار آمنة', 'قياس السلوك والنتائج', 'تطبيق الضوابط وإعادة التقييم'],
    safety: 'تُستخدم نماذج وبيانات تجريبية فقط. لا تُرسل بيانات سرية إلى خدمات عامة ولا تُختبر أنظمة AI خارج نطاق التفويض.',
    outputs: ['AI Threat Model', 'مصفوفة حالات اختبار', 'نتائج تقييم RAG والأدوات', 'توصيات حوكمة وتخفيف'],
    Icon: BrainCircuit
  },
  {
    id: 'wireless', name: 'أمن الشبكات اللاسلكية', en: 'WIRELESS & RADIO SECURITY', category: 'الأجهزة والأنظمة المتخصصة',
    status: 'مسار تعلم', summary: 'تقييم إعدادات Wi-Fi والمصادقة والتشفير ومخاطر الأجهزة اللاسلكية.',
    goal: 'تقوية الشبكات اللاسلكية وفهم حدود الثقة بين نقاط الوصول والأجهزة المتصلة.',
    environment: 'نقطة وصول مملوكة · عميل اختبار · محول متوافق · شبكة RF منفصلة.',
    tools: ['WPA2 / WPA3', 'Kismet', 'Wireshark', 'hostapd', 'Router security settings'],
    objectives: ['مراجعة أنماط المصادقة والتشفير', 'تقييم إعدادات نقطة الوصول وWPS', 'فهم مخاطر الشبكات المفتوحة والضيف', 'مراجعة عزل العملاء وتحديث Firmware', 'إعداد خط أساس أمني لاسلكي'],
    workflow: ['إنشاء شبكة اختبار خاصة', 'توثيق إعدادات نقطة الوصول', 'مراجعة الاتصالات والسياسات', 'تطبيق التقوية والتحقق منها'],
    safety: 'لا يجري التقاط أو اختبار شبكات الجيران أو الشبكات العامة. يقتصر العمل على نقطة وصول مملوكة أو بإذن صريح.',
    outputs: ['قائمة تحقق Wi-Fi', 'مخطط فصل الشبكات', 'مراجعة إعدادات AP', 'توصيات WPA3 وإدارة الوصول'],
    Icon: Wifi
  },
  {
    id: 'memory', name: 'تحليل الذاكرة والأنظمة', en: 'MEMORY & ENDPOINT FORENSICS', category: 'التحقيق والاستجابة',
    status: 'مسار تعلم', summary: 'تحليل آثار الأنظمة والعمليات والذاكرة وسجلات نقاط النهاية أثناء التحقيق.',
    goal: 'ربط آثار العمليات والملفات والاتصالات والأحداث لفهم ما جرى على نقطة النهاية.',
    environment: 'Windows وLinux VMs · صور ذاكرة تدريبية · Sysmon وjournald وسجلات اصطناعية.',
    tools: ['Volatility 3', 'Sysmon', 'Windows Event Viewer', 'Velociraptor', 'osquery'],
    objectives: ['تحليل العمليات والوحدات المحملة', 'مراجعة الاتصالات ومقابض الملفات', 'فهم آثار Persistence على مستوى دفاعي', 'ربط سجلات النظام بخط زمني', 'تمييز حدود الذاكرة الحية والقرص'],
    workflow: ['تحديد مصدر الدليل وتوقيته', 'جمع الصورة والسجلات', 'تحليل الآثار وربطها', 'كتابة استنتاجات مدعومة بالأدلة'],
    safety: 'تُستخدم صور ذاكرة وأجهزة افتراضية تدريبية. يُحافظ على سلامة الأدلة ولا تُجمع بيانات أجهزة الغير.',
    outputs: ['ملخص تحليل RAM', 'قائمة العمليات والاتصالات', 'خط زمني لنقطة النهاية', 'تقرير فني قابل للمراجعة'],
    Icon: HardDrive
  }
];

const filters = ['الكل', 'الدفاع والشبكات', 'التقييم الهجومي', 'التحقيق والاستجابة', 'أمن التطبيقات', 'أمن البيانات والهوية', 'الأجهزة والأنظمة المتخصصة', 'المحاكاة والتدريب'];

export default function LabsExplorer() {
  const [active, setActive] = useState('الكل');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState('network-defense');
  const visible = useMemo(() => labs.filter(l =>
    (active === 'الكل' || l.category === active) &&
    (l.name + ' ' + l.en + ' ' + l.summary + ' ' + l.tools.join(' ') + ' ' + l.objectives.join(' ')).toLowerCase().includes(query.trim().toLowerCase())
  ), [active, query]);
  const current = visible.find(l => l.id === selected) ?? visible[0];
  const SelectedIcon = current?.Icon ?? FlaskConical;

  return <main className="content-page labx-page">
    <style jsx global>{`
      .labx-page{padding-top:30px;padding-bottom:58px}
      .labx-topline{display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap;padding-bottom:13px;border-bottom:1px solid var(--line);color:#bda77d;font:8px/1.6 ui-monospace,monospace;letter-spacing:.11em}
      .labx-topline span:last-child{color:#8f9b9c}.labx-topline i{display:inline-block;width:5px;height:5px;margin:0 7px 1px;border-radius:50%;background:var(--brass)}
      .labx-hero{display:grid;grid-template-columns:minmax(0,1.5fr) minmax(210px,.7fr);align-items:center;gap:25px;padding:43px 0 28px}
      .labx-kicker{display:flex;align-items:center;gap:8px;color:var(--brass-light);font:8px/1.6 ui-monospace,monospace;letter-spacing:.09em}.labx-kicker svg{width:15px;height:15px}
      .labx-hero h1{margin:13px 0 12px;font-size:clamp(32px,5vw,52px);line-height:1.35;letter-spacing:-.04em}.labx-hero h1 em{color:var(--brass-light);font-style:normal}
      .labx-hero-copy>p{max-width:720px;margin:0;color:#b2bbb8;font-size:13px;line-height:2.15}
      .labx-hero-tags{display:flex;gap:8px;flex-wrap:wrap;margin-top:20px}.labx-hero-tags span{display:inline-flex;align-items:center;gap:6px;padding:6px 9px;border:1px solid var(--line-cool);border-radius:5px;color:#c6c4b9;font:8px ui-monospace,monospace}.labx-hero-tags svg{width:13px;height:13px;color:var(--brass-light)}
      .labx-hero-visual{display:grid;justify-items:center;gap:10px}.labx-orbit{position:relative;display:grid;place-items:center;width:190px;height:190px;border:1px solid rgba(183,155,104,.2);border-radius:50%;background:radial-gradient(circle,rgba(183,155,104,.09),transparent 68%)}
      .labx-orbit:before,.labx-orbit:after{content:"";position:absolute;border:1px dashed rgba(183,155,104,.19);border-radius:50%}.labx-orbit:before{inset:15px}.labx-orbit:after{inset:35px}
      .labx-orbit>div{z-index:1;display:grid;justify-items:center;gap:4px;color:var(--brass-light)}.labx-orbit>div svg{width:27px;height:27px}.labx-orbit>div b{font:700 19px ui-monospace,monospace;letter-spacing:.12em}.labx-orbit>div small{color:#8e9996;font:7px ui-monospace,monospace;letter-spacing:.2em}
      .labx-orbit>i{position:absolute;width:7px;height:7px;border:1px solid #d1b985;border-radius:50%;background:#927d57;box-shadow:0 0 14px rgba(183,155,104,.5)}.labx-orbit>i:nth-of-type(1){top:24px;left:55px}.labx-orbit>i:nth-of-type(2){right:20px;bottom:58px}.labx-orbit>i:nth-of-type(3){left:31px;bottom:43px}
      .labx-hero-visual>span{color:#8e9b98;font:7px ui-monospace,monospace;letter-spacing:.14em}
      .labx-stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));border:1px solid var(--line);border-radius:9px;background:linear-gradient(110deg,rgba(183,155,104,.06),rgba(255,255,255,.012));overflow:hidden}
      .labx-stats article{display:grid;gap:2px;padding:15px 18px;border-right:1px solid var(--line-cool)}.labx-stats article:last-child{border:0}.labx-stats b{color:var(--brass-light);font:700 23px ui-monospace,monospace}.labx-stats span{color:#aeb7b2;font-size:9px}
      .labx-intro{display:flex;justify-content:space-between;align-items:end;gap:20px;margin:39px 0 14px}.labx-intro>div>span,.labx-method>div:first-child>span{color:var(--brass-light);font:8px ui-monospace,monospace;letter-spacing:.12em}
      .labx-intro h2,.labx-method h2{margin:7px 0 4px;font-size:20px}.labx-intro p,.labx-method p{margin:0;color:#9da9a5;font-size:10px;line-height:1.9}
      .labx-search{display:flex;align-items:center;gap:8px;width:min(310px,100%);padding:9px 11px;border:1px solid var(--line-cool);border-radius:7px;background:rgba(255,255,255,.018)}.labx-search svg{width:15px;height:15px;color:var(--brass-light)}.labx-search input{width:100%;border:0;outline:0;background:transparent;color:var(--ivory);font-size:10px}.labx-search input::placeholder{color:#77827f}
      .labx-filters{display:flex;gap:7px;flex-wrap:wrap;margin-bottom:15px}.labx-filters button{padding:6px 11px;border:1px solid var(--line-cool);border-radius:5px;background:transparent;color:#aeb8b2;font-size:9px}.labx-filters button:hover,.labx-filters button.active{border-color:rgba(183,155,104,.55);background:rgba(183,155,104,.1);color:var(--brass-light)}
      .labx-layout{display:grid;grid-template-columns:minmax(260px,.82fr) minmax(0,1.55fr);align-items:start;gap:14px}.labx-list{display:grid;gap:8px;max-height:920px;overflow:auto;padding:1px 3px 1px 1px;scrollbar-width:thin;scrollbar-color:rgba(183,155,104,.35) transparent}
      .labx-card{position:relative;display:grid;grid-template-columns:35px minmax(0,1fr) auto;align-items:center;gap:9px;width:100%;padding:12px;text-align:right;border:1px solid var(--line-cool);border-radius:8px;background:linear-gradient(145deg,rgba(31,45,51,.68),rgba(12,20,27,.9));color:var(--ivory);cursor:pointer}
      .labx-card:hover,.labx-card.is-active{border-color:rgba(183,155,104,.52);background:linear-gradient(145deg,rgba(55,55,43,.45),rgba(15,24,30,.96));box-shadow:0 8px 22px rgba(0,0,0,.13)}
      .labx-card-index{grid-column:1/-1;color:#b9a478;font:7px ui-monospace,monospace;letter-spacing:.12em}.labx-card-icon{display:grid;place-items:center;width:34px;height:34px;border:1px solid rgba(183,155,104,.22);border-radius:7px;color:var(--brass-light)}.labx-card-icon svg{width:17px;height:17px}
      .labx-card-title{display:grid;gap:2px;min-width:0}.labx-card-title b{font-size:10px}.labx-card-title small{color:#899792;font:7px ui-monospace,monospace;letter-spacing:.03em;overflow-wrap:anywhere}
      .labx-card-status{grid-column:2/-1;justify-self:start;padding:3px 6px;border-radius:4px;background:rgba(183,155,104,.09);color:#c5b68f;font-size:8px}.labx-card-summary{grid-column:1/-1;color:#9eaaa5;font-size:9px;line-height:1.8}
      .labx-card-tools{grid-column:1/-1;display:flex;gap:5px;flex-wrap:wrap}.labx-card-tools i,.labx-tool-list span{padding:3px 6px;border:1px solid rgba(183,155,104,.16);border-radius:4px;color:#b9b8aa;font:7px ui-monospace,monospace;font-style:normal}
      .labx-card>svg{position:absolute;top:17px;left:11px;width:13px;height:13px;color:#8b9993;transform:rotate(90deg)}.labx-empty{padding:25px;border:1px dashed var(--line);border-radius:8px;color:#aeb8b2;font-size:11px;text-align:center}
      .labx-detail{min-width:0;padding:20px;border:1px solid rgba(183,155,104,.28);border-radius:10px;background:linear-gradient(145deg,rgba(29,43,50,.88),rgba(12,20,27,.96));box-shadow:var(--shadow-soft);animation:labx-in .25s ease}
      @keyframes labx-in{from{opacity:.5;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}
      .labx-detail-head{display:flex;justify-content:space-between;align-items:center;gap:10px;padding-bottom:12px;border-bottom:1px solid var(--line-cool);color:#bda77d;font:7px ui-monospace,monospace;letter-spacing:.1em}.labx-status{display:inline-flex;align-items:center;gap:6px;color:#c5b68f;letter-spacing:0}.labx-status i{width:6px;height:6px;border-radius:50%;background:#bda77d}
      .labx-detail-title{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:18px 0 12px}.labx-detail-title small{color:#9b9e91;font:7px ui-monospace,monospace;letter-spacing:.1em}.labx-detail-title h2{margin:4px 0 0;font-size:22px}.labx-detail-title>svg{width:30px;height:30px;color:var(--brass-light)}
      .labx-detail-block{margin-top:14px}.labx-detail-block h3{display:flex;align-items:center;gap:7px;margin:0 0 6px;color:#d4c7a7;font-size:11px}.labx-detail-block h3 svg{width:14px;height:14px;color:var(--brass-light)}.labx-detail-block p{margin:0;color:#aeb9b4;font-size:10px;line-height:2}
      .labx-tool-list{display:flex;gap:6px;flex-wrap:wrap;margin-top:9px}.labx-detail-block ul{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:7px 16px;margin:8px 0 0;padding:0 17px 0 0;color:#aeb9b4;font-size:9px;line-height:1.8}.labx-detail-block li::marker{color:var(--brass-light)}
      .labx-steps{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:7px;margin-top:9px}.labx-steps>div{display:grid;gap:6px;align-content:start;min-height:70px;padding:9px;border:1px solid var(--line-cool);border-radius:6px;background:rgba(255,255,255,.018)}.labx-steps i{color:var(--brass-light);font:8px ui-monospace,monospace;font-style:normal}.labx-steps span{color:#b8c0ba;font-size:8px;line-height:1.7}
      .labx-safety{display:grid;grid-template-columns:20px minmax(0,1fr);gap:9px;margin-top:18px;padding:12px;border:1px solid rgba(183,155,104,.24);border-radius:7px;background:rgba(183,155,104,.055)}.labx-safety>svg{width:18px;height:18px;color:var(--brass-light)}.labx-safety b{color:#d6c59f;font-size:9px}.labx-safety p{margin:3px 0 0;color:#aeb6ad;font-size:9px;line-height:1.9}
      .labx-report{margin-top:10px;padding:12px;border:1px dashed rgba(183,155,104,.25);border-radius:7px;background:rgba(0,0,0,.12)}.labx-report>div{display:grid;gap:3px}.labx-report>div span{color:#bda77d;font:7px ui-monospace,monospace;letter-spacing:.1em}.labx-report>div b{color:#d6d0c2;font-size:10px}.labx-report ul{display:flex;gap:7px 16px;flex-wrap:wrap;margin:8px 0 0;padding:0 16px 0 0;color:#9fa9a2;font-size:9px;line-height:1.8}
      .labx-method{display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr);gap:25px;align-items:center;margin:38px 0 22px;padding:21px;border:1px solid var(--line);border-radius:9px;background:linear-gradient(110deg,rgba(183,155,104,.06),rgba(255,255,255,.012))}
      .labx-method-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:7px}.labx-method-grid article{display:grid;gap:6px;padding:10px 8px;border:1px solid var(--line-cool);border-radius:6px;background:rgba(0,0,0,.12)}.labx-method-grid i{color:var(--brass-light);font:8px ui-monospace,monospace;font-style:normal}.labx-method-grid b{color:#ded8ca;font:700 9px ui-monospace,monospace}.labx-method-grid small{color:#9ba7a0;font-size:8px;line-height:1.6}
      .labx-note{display:flex;align-items:flex-start;gap:11px;padding:14px;border:1px solid var(--line-cool);border-radius:8px;background:rgba(255,255,255,.015)}.labx-note svg{width:18px;height:18px;flex:0 0 18px;color:var(--brass-light)}.labx-note p{margin:0;color:#aeb8b2;font-size:9px;line-height:2}.labx-note b{color:#d6c59f}
      .labx-footer{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-top:24px;padding-top:13px;border-top:1px solid var(--line-cool)}.labx-footer span{color:#9b9e91;font:7px ui-monospace,monospace;letter-spacing:.1em}.labx-footer b{color:#c6b58c;font:italic 10px Georgia,serif}.labx-footer a{display:inline-flex;align-items:center;gap:5px;color:var(--brass-light);font-size:9px}.labx-footer a svg{width:13px;height:13px}
      @media(max-width:850px){.labx-layout{grid-template-columns:1fr}.labx-list{grid-template-columns:repeat(2,minmax(0,1fr));max-height:none}.labx-method{grid-template-columns:1fr}}
      @media(max-width:600px){.labx-page{padding-top:20px}.labx-hero{grid-template-columns:1fr;padding:30px 0 22px}.labx-hero-visual{display:none}.labx-hero h1{font-size:34px}.labx-hero-copy>p{font-size:11px}.labx-stats{grid-template-columns:repeat(2,minmax(0,1fr))}.labx-stats article{padding:12px;border-bottom:1px solid var(--line-cool)}.labx-stats article:nth-child(2){border-left:0}.labx-stats article:nth-child(3),.labx-stats article:nth-child(4){border-bottom:0}.labx-intro{align-items:stretch;flex-direction:column;margin-top:29px}.labx-search{width:100%}.labx-list{grid-template-columns:1fr}.labx-detail{padding:14px}.labx-detail-title h2{font-size:18px}.labx-detail-block ul{grid-template-columns:1fr}.labx-steps{grid-template-columns:repeat(2,minmax(0,1fr))}.labx-method{padding:14px}.labx-method-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.labx-footer{align-items:flex-start;flex-direction:column}}
      @media(prefers-reduced-motion:reduce){.labx-detail{animation:none}}
    `}</style>
    <div className="labx-topline"><span>CYBERSECURITY / APPLIED LABORATORIES</span><span>ARFAT ALKAMALI <i/> TECHNICAL PRACTICE</span></div>
    <section className="labx-hero">
      <div className="labx-hero-copy">
        <span className="labx-kicker"><FlaskConical/> CONTROLLED EXPERIMENTS · ENGINEERING PRACTICE</span>
        <h1>المعامل <em>التطبيقية</em></h1>
        <p>منظومة معامل تخصصية تغطي دورة الأمن السيبراني: بناء الأنظمة وتأمينها، التقييم الهجومي المصرح، الرصد والتحقيق، أمن البرمجيات والبيانات، والتقنيات الناشئة. لكل معمل نطاق وبيئة وأهداف ومخرجات قابلة للتوثيق.</p>
        <div className="labx-hero-tags"><span><ShieldCheck/> Authorized Scope</span><span><Network/> Isolated Environments</span><span><FileSearch/> Evidence & Reports</span></div>
      </div>
      <div className="labx-hero-visual" aria-hidden="true"><div className="labx-orbit"><div><FlaskConical/><b>LAB</b><small>01—16</small></div><i/><i/><i/></div><span>DESIGN / TEST / VERIFY / DOCUMENT</span></div>
    </section>
    <section className="labx-stats" aria-label="ملخص المعامل">
      <article><b>{String(labs.length).padStart(2,'0')}</b><span>معمل ومسار تخصصي</span></article>
      <article><b>07</b><span>مجالات تقنية رئيسية</span></article>
      <article><b>04</b><span>مراحل منهجية موحدة</span></article>
      <article><b>100%</b><span>نطاق مصرح وبيئات مضبوطة</span></article>
    </section>
    <section className="labx-intro"><div><span>01 / LAB DIRECTORY</span><h2>دليل المعامل التخصصية</h2><p>استعرض المعامل أو صفِّ حسب المجال، وابحث باسم التقنية أو الأداة أو هدف التجربة.</p></div>
      <label className="labx-search"><Search/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="ابحث عن معمل أو أداة أو مجال..." aria-label="البحث في المعامل"/></label>
    </section>
    <div className="labx-filters" role="group" aria-label="تصفية المعامل">{filters.map(f=><button type="button" key={f} className={active===f?'active':''} aria-pressed={active===f} onClick={()=>{setActive(f);setSelected('')}}>{f}</button>)}</div>
    <section className="labx-layout">
      <div className="labx-list">{visible.map((lab,i)=>{const Icon=lab.Icon;return <button type="button" key={lab.id} className={'labx-card '+(current?.id===lab.id?'is-active':'')} onClick={()=>setSelected(lab.id)} aria-pressed={current?.id===lab.id}>
        <span className="labx-card-index">LAB / {String(labs.findIndex(x=>x.id===lab.id)+1).padStart(2,'0')} · {lab.category}</span>
        <span className="labx-card-icon"><Icon/></span><span className="labx-card-title"><b>{lab.name}</b><small>{lab.en}</small></span><span className="labx-card-status">{lab.status}</span>
        <span className="labx-card-summary">{lab.summary}</span><span className="labx-card-tools">{lab.tools.slice(0,3).map(t=><i key={t}>{t}</i>)}</span><ChevronDown/>
      </button>})}{visible.length===0&&<div className="labx-empty">لا توجد نتائج مطابقة. جرّب كلمة أخرى أو اختر «الكل».</div>}</div>
      {current&&<article className="labx-detail" key={current.id}>
        <div className="labx-detail-head"><span>LAB PROFILE / {current.id.toUpperCase()}</span><span className="labx-status"><i/>{current.status}</span></div>
        <div className="labx-detail-title"><div><small>{current.en}</small><h2>{current.name}</h2></div><SelectedIcon/></div>
        <div className="labx-detail-block"><h3><Shield/> الهدف التقني</h3><p>{current.goal}</p></div>
        <div className="labx-detail-block"><h3><Terminal/> بيئة العمل والبنية</h3><p>{current.environment}</p><div className="labx-tool-list">{current.tools.map(t=><span key={t}>{t}</span>)}</div></div>
        <div className="labx-detail-block"><h3><CheckCircle2/> مجالات التركيز وأهداف التطبيق</h3><ul>{current.objectives.map(x=><li key={x}>{x}</li>)}</ul></div>
        <div className="labx-detail-block"><h3><Activity/> سير العمل التجريبي</h3><div className="labx-steps">{current.workflow.map((x,i)=><div key={x}><i>0{i+1}</i><span>{x}</span></div>)}</div></div>
        <div className="labx-safety"><ShieldCheck/><div><b>حدود السلامة والنطاق</b><p>{current.safety}</p></div></div>
        <div className="labx-report"><div><span>EXPECTED OUTPUTS / DOCUMENTATION</span><b>المخرجات الفنية القابلة للتوثيق</b></div><ul>{current.outputs.map(x=><li key={x}>{x}</li>)}</ul></div>
      </article>}
    </section>
    <section className="labx-method"><div><span>02 / ENGINEERING WORKFLOW</span><h2>منهجية هندسية موحدة</h2><p>قيمة المعمل ليست في عدد الأدوات، بل في وضوح السؤال، وسلامة البيئة، وقابلية تكرار التجربة، وجودة الأدلة والتوصيات.</p></div><div className="labx-method-grid"><article><i>01</i><b>Scope</b><small>تحديد النطاق والتصريح</small></article><article><i>02</i><b>Prepare</b><small>عزل البيئة وتجهيزها</small></article><article><i>03</i><b>Validate</b><small>تنفيذ ومراقبة وقياس</small></article><article><i>04</i><b>Document</b><small>توثيق الأدلة والمعالجة</small></article></div></section>
    <aside className="labx-note"><ShieldCheck/><p><b>الشفافية المهنية:</b> هذا الدليل يعرض مجالات ومعامل مقترحة للتعلم والتطبيق، ولا يعني أن جميع البيئات مجهزة فعلياً أو أن كل اختبار قد نُفذ. ستُعرض التقارير والنتائج وروابط المشاريع فقط بعد إنجازها والتحقق منها، مع تمييز حالة كل مسار بوضوح.</p></aside>
    <footer className="labx-footer"><span>ARFAT ALKAMALI / CYBERSECURITY LABS</span><b>Building Systems. Securing the Future.</b><Link href="/projects">استعراض المشاريع <ArrowUpLeft/></Link></footer>
  </main>;
}
